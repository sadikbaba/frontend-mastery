import { deleteApplication } from "../api/applicationsApi";
import "./css/ApplicationList.css";

function ApplicationList({
  applications,
  onDeleted,
  onAdd,
  onEdit,
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
        <div>
          <span className="section-eyebrow">OVERVIEW</span>
          <h1>Your applications</h1>
          <p>Keep every opportunity organized in one place.</p>
        </div>
        <div className="applications-header-actions">
          <span className="application-count">
            {applications.length}{" "}
            {applications.length === 1 ? "application" : "applications"}
          </span>
          <button
            type="button"
            className="add-button"
            onClick={onAdd}
          >
            <span aria-hidden="true">+</span> Add application
          </button>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state-mark" aria-hidden="true">+</span>
          <h2>Your next opportunity starts here</h2>
          <p>Add your first application to start tracking your progress.</p>
          <button
            type="button"
            className="add-button"
            onClick={onAdd}
          >
            Add your first application
          </button>
        </div>
      ) : (
        <ul className="applications-grid">
          {applications.map((application) => (
            <li className="application-card" key={application.id}>
              <div className="application-card-heading">
                <div className="company-mark" aria-hidden="true">
                  {application.company?.trim().charAt(0).toUpperCase() || "?"}
                </div>
                <div className="application-title">
                  <h2>{application.company}</h2>
                  <p>{application.role}</p>
                </div>
                <span className="application-status">{application.status}</span>
              </div>

              {application.notes && (
                <p className="application-notes">{application.notes}</p>
              )}

              <div className="application-meta">
                <p>
                  <span>Added</span>
                  {formatDate(application.created_at)}
                </p>
                <p>
                  <span>Updated</span>
                  {formatDate(application.updated_at)}
                </p>
              </div>

              <div className="application-buttons-container">
                <button
                  type="button"
                  onClick={() => onEdit(application)}
                  className="edit-button"
                >
                  Edit details
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    await deleteApplication(application.id);
                    onDeleted(application);
                  }}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ApplicationList;
