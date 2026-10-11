import { useState, useEffect } from "react";

function App() {
  const [status, setstatus] = useState("Not Applied");

  useEffect(() => {
    console.log("Effect started for:", status);

    return () => {
      console.log("Cleanup for:", status);
    };
  }, [status]);
  return (
    <>
      <h2>{status}</h2>

      <button onClick={() => setstatus("Applied")}>Apply</button>
      <button onClick={() => setstatus("Interviewing")}>Interview</button>
    </>
  );
}

export default App;
