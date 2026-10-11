import { useState } from "react";

function App() {
  const [company, setCompany] = useState("");
  const [submittedCompany, setSubmittedCompany] = useState("");
  const [role, setRole] = useState("");
  const [submittedRole, setSubmittedRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted company:", company);
    setSubmittedCompany(company);
    setSubmittedRole(role);

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

      {submittedCompany && <p>Submitted: {submittedCompany}</p>}
      {submittedCompany && (
        <p>
          Submitted: {submittedCompany} by {submittedRole}
        </p>
      )}
    </>
  );
}

export default App;
