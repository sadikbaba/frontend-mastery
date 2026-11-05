import { useEffect, useState } from "react";
import { getApplications } from "./api/applicationsApi";
import "./App.css";

import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import EditApplicationForm from "./components/EditApplicationForm";
import RegisterForm from "./components/RegisterForm.jsx";
function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentView, setCurrentView] = useState("list");
  const [selectedApplication, setSelectedApplication] = useState(null);

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

  function handleApplicationUpdated(updatedApplication) {
    setApplications((currentApplications) =>
      currentApplications.map((application) => {
        if (application.id === updatedApplication.id) {
          return updatedApplication;
        }
        return application;
      }),
    );
  }

  function handleApplicationDeleted(deletedApplication) {
    setApplications((currentApplications) =>
      currentApplications.filter((application) => {
        return application.id !== deletedApplication.id;
      }),
    );
  }

  return (
    <>
      <main>
        {!loading && currentView === "list" && error && <p>{error}</p>}
        {loading && <p>Loading applications...</p>}

        {!loading && !error && currentView === "list" && (
          <ApplicationList
            applications={applications}
            setCurrentView={setCurrentView}
            setSelectedApplication={setSelectedApplication}
            onDeleted={handleApplicationDeleted}
          />
        )}

        {!loading &&
          !error &&
          applications.length === 0 &&
          currentView === "list" && <p>No applications yet.</p>}

        {currentView === "form" && (
          <ApplicationForm
            onCreated={handleApplicationCreated}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === "list" && (
          <div className="list-actions">
            <button
              type="button"
              onClick={() => setCurrentView("form")}
              className="add-button"
            >
              Add Application
            </button>
          </div>
        )}

        {currentView === "edit" && selectedApplication && (
          <EditApplicationForm
            formData={selectedApplication}
            setFormData={setSelectedApplication}
            setCurrentView={setCurrentView}
            onUpdated={handleApplicationUpdated}
          />
        )}

        <RegisterForm />
      </main>
    </>
  );
}

export default App;
