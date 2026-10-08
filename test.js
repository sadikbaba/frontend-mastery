const { useState } = React;

function JobCard1({ company, salary, isRemote }) {
  return (
    <>
      <h2>{company}</h2>
      <p>{salary}</p>
      <p>{isRemote ? "Remote" : "Office"}</p>
    </>
  );
}

function JobCard2({ company }) {
  const [status, setStatus] = useState(" not Applied");

  return (
    <>
      <h2>{company}</h2>
      <p>{status}</p>
      <button onClick={() => setStatus("applied")}>Apply</button>
    </>
  );
}

function App() {
  return (
    <div>
      <JobCard1 company="ABC" salary={100} isRemote={true} />
      <JobCard1 company="XYZ" salary={200} isRemote={false} />

      <JobCard2 company="Hamza" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
