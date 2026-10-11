import { useState } from "react";

function JobCard({ company }) {
  const [status, setStatus] = useState("not Applied");
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <h2>{company}</h2>
      <p>{status}</p>
      <p>{isFavorite ? "Favorite" : "Not Favorite"}</p>

      <button onClick={() => setStatus("applied")}>Apply</button>
      <button onClick={() => setStatus("Interviewing")}>Interview</button>
      <button onClick={() => setIsFavorite((prev) => !prev)}>Favorite</button>
    </>
  );
}

function App() {
  return <JobCard company="sadik" />;
}

export default App;
