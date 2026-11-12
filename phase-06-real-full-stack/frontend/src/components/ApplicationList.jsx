import { deleteApplication } from "../api/applicationsApi";
import "./css/ApplicationList.css";
import { useEffect, useState } from "react";

function ApplicationList({
  applications,
  filterLoading,
  statusFilter,
  onDeleted,
  onFilterChange,
  onAdd,
  onEdit,
  search,
  onSearchChange,
  pagination,
  currentPage,
  onPageChange,
}) {
  const [localSearch, setLocalSearch] = useState(search);

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

  // Debounce: only tell the parent after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== search) {
        onSearchChange(localSearch);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [localSearch, search, onSearchChange]);

  return (
    <section className="applications-section">
      <div className="applications-header">
        <div>
          <span className="section-eyebrow">OVERVIEW</span>
          <h1>Your applications</h1>
          <p>Keep every opportunity organized in one place.</p>
        </div>
        <span className="application-count">
          {pagination.count}{" "}
          {pagination.count === 1 ? "application" : "applications"}
        </span>
      </div>

      <div className="application-filters">
        <div className="status-filter">
          <select
            id="status-filter"
            value={statusFilter}
            aria-busy={filterLoading}
            disabled={filterLoading}
            onChange={(event) => onFilterChange(event.target.value)}
          >
            <option value="">All statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <form
          className="application-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="application-search">
            Search applications
          </label>
          <svg
            className="search-icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            id="application-search"
            type="search"
            value={localSearch}
            placeholder="Company, role or notes..."
            onChange={(event) => setLocalSearch(event.target.value)}
            className="search-input"
          />
        </form>
        {filterLoading && (
          <span className="filter-loading" role="status">
            Updating results...
          </span>
        )}
        <button
          type="button"
          className="add-button"
          onClick={onAdd}
          aria-label="Add application"
        >
          <span className="add-button-label">Add application</span>
        </button>
      </div>

      {applications.length === 0 && statusFilter ? (
        <div className="empty-state">
          <h2>No applications with this status</h2>
          <p>Try another status or clear the filter to see all applications.</p>
          <button
            type="button"
            className="add-button"
            onClick={() => onFilterChange("")}
          >
            Clear filter
          </button>
        </div>
      ) : pagination.count === 0 ? (
        <div className="empty-state">
          <span className="empty-state-mark" aria-hidden="true">
            +
          </span>
          <h2>Your next opportunity starts here</h2>
          <p>Add your first application to start tracking your progress.</p>
          <button type="button" className="add-button" onClick={onAdd}>
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

      {pagination.count > 0 && (
        <div className="pagination-controls">
          <button
            type="button"
            className="pagination-button"
            disabled={!pagination.previous || filterLoading}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>

          <span className="pagination-current">Page {currentPage}</span>

          <button
            type="button"
            className="pagination-button"
            disabled={!pagination.next || filterLoading}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default ApplicationList;
