import { useState } from "react";

function JobForm({ onAddJob  }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  function handleSubmit(e) {
    e.preventDefault();

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

  return (
    <>
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
        <button type="submit">Submit</button>

    
      </form>
    </>
  );
}

export default JobForm;
