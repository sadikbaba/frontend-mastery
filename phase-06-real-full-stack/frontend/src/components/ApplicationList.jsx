import { deleteApplication } from "../api/applicationsApi";
import "./css/ApplicationList.css";

function ApplicationList({
  applications,
  setCurrentView,
  setSelectedApplication,
  onDeleted,
}) {
  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <section className="applications-section">
      <div className="applications-header">
        <h1>Your Applications</h1>
        <p>Track and manage the jobs you have applied for.</p>
      </div>
      <ul className="applications-grid">
        {applications.map((application) => (
          <li className="application-card" key={application.id}>
            <h2>{application.company}</h2>
            <p>{application.role}</p>
            <p className="application-status">{application.status}</p>
            <p>{application.notes}</p>
            <p className="application-date">
              Created: {formatDate(application.created_at)}
            </p>

            <p className="application-date">
              Updated: {formatDate(application.updated_at)}
            </p>
            <div className="application-buttons-container">
              <button
                type="button"
                onClick={() => {
                  setSelectedApplication(application);
                  setCurrentView("edit");
                }}
                className="edit-button"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={async () => {
                  await deleteApplication(application.id);
                  onDeleted(application);
                  setCurrentView("list");
                }}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ApplicationList;
