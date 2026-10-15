import { useState } from "react";
import JobForm from "./components/JobForm.jsx";
import JobList from "./components/JobList.jsx";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

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

  const filteredJobs =
    selectedFilter === "All"
      ? jobs
      : jobs.filter((job) => job.status === selectedFilter);

  return (
    <>
      <h1>Job Application Tracker</h1>

      <JobForm onAddJob={addJob} />

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
      />
    </>
  );
}

export default App;