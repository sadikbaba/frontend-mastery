import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { getApplications } from "./api/applicationsApi";
import "./App.css";
import {
  getCsrfCookie,
  logoutUser,
  refreshAccessToken,
} from "./api/accountsApi.js";

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authStatus, setAuthStatus] = useState("checking");
  const location = useLocation();
  const [initialStatus] = useState(
    () => new URLSearchParams(window.location.search).get("status") || "",
  );
  const [loadedStatus, setLoadedStatus] = useState(initialStatus);

  useEffect(() => {
    async function restoreSession() {
      try {
        setLoading(true);
        setError("");

        await getCsrfCookie();
        await refreshAccessToken();
        const data = await getApplications({ status: initialStatus });
        setApplications(data);
        setAuthStatus("authenticated");
      } catch (requestError) {
        setError(requestError.status === 401 ? "" : requestError.message);
        setAuthStatus("unauthenticated");
      } finally {
        setLoading(false);
      }
    }

    restoreSession();
  }, [initialStatus]);

  function handleApplicationCreated(createdApplication) {
    setApplications((currentApplications) => [
      ...currentApplications,
      createdApplication,
    ]);
  }

  function handleApplicationUpdated(updatedApplication) {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === updatedApplication.id
          ? updatedApplication
          : application,
      ),
    );
  }

  function handleApplicationDeleted(deletedApplication) {
    setApplications((currentApplications) =>
      currentApplications.filter(
        (application) => application.id !== deletedApplication.id,
      ),
    );
  }

  const handleStatusFilterChange = useCallback(async (status) => {
    setLoading(true);
    setError("");

    try {
      const data = await getApplications({ status });
      setApplications(data);
      setLoadedStatus(status);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleLoginSuccess() {
    setLoading(true);
    setError("");

    try {
      await getCsrfCookie();
      const data = await getApplications();
      setApplications(data);
      setAuthStatus("authenticated");
    } catch (requestError) {
      setError(requestError.message);
      throw requestError;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await logoutUser();
      setAuthStatus("unauthenticated");
      setApplications([]);
      setError("");
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/register";
  const outletContext = {
    applications,
    onApplicationCreated: handleApplicationCreated,
    onApplicationUpdated: handleApplicationUpdated,
    onApplicationDeleted: handleApplicationDeleted,
    onLoginSuccess: handleLoginSuccess,
    onStatusFilterChange: handleStatusFilterChange,
    loadedStatus,
    isLoading: loading,
  };

  if (authStatus === "checking") {
    return (
      <main className="app-shell">
        <div className="app-loading" role="status">
          <span className="loading-indicator" />
          <p>Getting your workspace ready...</p>
        </div>
      </main>
    );
  }

  if (authStatus === "unauthenticated" && !isAuthRoute) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  if (authStatus === "authenticated" && isAuthRoute) {
    return <Navigate to="/applications" replace />;
  }

  return (
    <main className="app-shell">
      {authStatus === "authenticated" && (
        <header className="app-topbar">
          <Link
            className="app-brand"
            to="/applications"
            aria-label="CareerTrack home"
          >
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span>CareerTrack</span>
          </Link>
          <div className="topbar-actions">
            <span className="workspace-label">MY WORKSPACE</span>
            <button
              type="button"
              onClick={handleLogout}
              className="logout-button"
            >
              Log out
            </button>
          </div>
        </header>
      )}

      {error && (
        <div
          className={`app-notice app-notice-error${authStatus === "unauthenticated" ? " auth-notice" : ""}`}
          role="alert"
        >
          {error}
        </div>
      )}

      <Outlet context={outletContext} />
    </main>
  );
}

export default App;
