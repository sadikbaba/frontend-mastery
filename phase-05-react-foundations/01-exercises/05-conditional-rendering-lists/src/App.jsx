import { useState } from "react";

function JobCard({ company }) {
  const [isRemote, setIsRemote] = useState(true);

  const jobs = ["OpenAI", "Google", "Microsoft"];

  const jobs_1 = [
    { id: 1, company: "OpenAI", isRemote: true },
    { id: 2, company: "Google", isRemote: false },
    { id: 3, company: "Microsoft", isRemote: true },
  ];

  return (
    <>
      <h2>{company}</h2>

      {isRemote && <p>Remote</p>}

      <button onClick={() => setIsRemote((prev) => !prev)}>
        Toggle Remote
      </button>

      <ul>
        {jobs.map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
      <ul>
        {jobs_1.map((job) => (
          <li key={job.id}>
            {job.company}
            {job.isRemote && <span> - Remote</span>}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return <JobCard company="OpenAI" />;
}

export default App;
