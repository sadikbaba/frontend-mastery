import { useState } from "react";

function JobForm({ onAddJob, editingJob, onUpdateJob }) {
  const [company, setCompany] = useState(editingJob?.company ?? "");
  const [role, setRole] = useState(editingJob?.role ?? "");
  const [status, setStatus] = useState(editingJob?.status ?? "Applied");

  function handleSubmit(e) {
    e.preventDefault();

    if (editingJob) {
      const updatedJob = {
        ...editingJob,
        company: company,
        role: role,
        status: status,
      };

      onUpdateJob(updatedJob);
    } else {
      const newJob = {
        id: crypto.randomUUID(),
        company: company,
        role: role,
        status: status,
      };

      onAddJob(newJob);

      setCompany("");
      setRole("");
      setStatus("Applied");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company name"
      />

      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Job role"
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
      </select>

      <button type="submit">{editingJob ? "Update Job" : "Add Job"}</button>
    </form>
  );
}

export default JobForm;
