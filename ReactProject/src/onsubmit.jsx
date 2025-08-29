import { useState } from "react";

function New() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 
    setSubmittedName(name); 
    setName(""); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input  type="text"value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <h2>Submitted Name: {submittedName}</h2>
      )}
    </div>
  );
}

export default New;
