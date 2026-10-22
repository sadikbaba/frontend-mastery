import { useEffect, useState } from "react";
import { getApplications } from "./api/applicationsApi";
// import "./App.css";

import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentView, setCurrentView] = useState("list");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const data = await getApplications();
        setApplications(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function handleApplicationCreated(createdApplication) {
    setApplications((currentApplications) => [
      ...currentApplications,
      createdApplication,
    ]);
  }

  return (
    <>
      <main>
        {error && <p>{error}</p>}
        {loading && <p>Loading applications...</p>}

        {!loading && !error && currentView === "list" && (
          <ApplicationList applications={applications} />
        )}

        {!loading &&
          !error &&
          applications.length === 0 &&
          currentView !== "form" && <p>No applications yet.</p>}

        {currentView === "form" && (
          <ApplicationForm
            onCreated={handleApplicationCreated}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === "list" && (
          <button type="button" onClick={() => setCurrentView("form")}>
            Add Application
          </button>
        )}
      </main>
    </>
  );
}

export default App;
