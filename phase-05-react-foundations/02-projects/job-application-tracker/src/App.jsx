import { useState, useEffect } from "react";
import JobForm from "./components/JobForm.jsx";
import JobList from "./components/JobList.jsx";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    return [];
  });

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [editingJob, setEditingJob] = useState(null);

  function addJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  function deleteJob(jobId) {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
  }

  function updateJobStatus(jobId, newStatus) {
    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return {
          ...job,
          status: newStatus,
        };
      }

      return job;
    });

    setJobs(updatedJobs);
  }

  function startEditing(job) {
    setEditingJob(job);
  }

  function updateJob(updatedJob) {
    const updatedJobs = jobs.map((job) => {
      if (job.id === updatedJob.id) {
        return updatedJob;
      }

      return job;
    });

    setJobs(updatedJobs);
    setEditingJob(null);
  }

  const filteredJobs =
    selectedFilter === "All"
      ? jobs
      : jobs.filter((job) => job.status === selectedFilter);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <>
      <h1>Job Application Tracker</h1>
      <JobForm
        key={editingJob?.id ?? "new"}
        onAddJob={addJob}
        editingJob={editingJob}
        onUpdateJob={updateJob}
      />

      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
      </select>

      <JobList
        jobs={filteredJobs}
        onDeleteJob={deleteJob}
        onUpdateJobStatus={updateJobStatus}
        onEditJob={startEditing}
      />
    </>
  );
}

export default App;
