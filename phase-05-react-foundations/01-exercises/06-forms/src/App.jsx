import { useState } from "react";

function JobForm({ onAddJob }) {
  const [company, setCompany] = useState("");
  const [submittedCompany, setSubmittedCompany] = useState("");
  const [role, setRole] = useState("");
  const [submittedRole, setSubmittedRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedCompany(company);
    setSubmittedRole(role);

    const newJob = {
      id: crypto.randomUUID(),
      company: company,
      role: role,
    };

    onAddJob(newJob);

    setCompany("");
    setRole("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
        />

        <br />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Job role"
        />

        <button type="submit">Submit</button>
      </form>

      {submittedCompany && (
        <p>
          Submitted: {submittedCompany} - {submittedRole}
        </p>
      )}
    </>
  );
}

function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job, ) => (
        <li key={job.id}>
         
          {job.company} - {job.role}
        </li>
      ))}
    </ul>
  );
}

function Card({ children }) {
  return <div>{children}</div>;
}

function App() {
  const [jobs, setJobs] = useState([]);

  function addJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  return (
    <>
      <h1>Job Form</h1>

      <JobForm onAddJob={addJob} />
      <Card>
        <JobList jobs={jobs} />
      </Card>
    </>
  );
}

export default App;
