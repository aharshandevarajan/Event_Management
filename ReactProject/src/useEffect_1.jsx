import { useEffect, useState } from "react";

function UseEff() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  // 🔥 This useEffect will run only when name OR age changes
  useEffect(() => {
    console.log("Hello - State changed!");
    console.log("Current Name:", name);
    console.log("Current Age:", age);
  }, [name, age]); // dependency array

  function changeName() {
    setName("Aharshuu");
  }

  function changeAge() {
    setAge("19");
  }

  return (
    <div className="container">
      <button onClick={changeName}>Set Name</button>
      <button onClick={changeAge}>Set Age</button>
      <p>{name} - {age}</p>
    </div>
  );
}

export default UseEff;
