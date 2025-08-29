import { useEffect, useState } from "react";  

function UseEff()
{
  const [name,setName]=useState("");
const [age,setAge]=useState();
const [count,setCount]= useState(0);
  useEffect(()=>{
  {
    console.log(count)
  }
},);
 function changeName()
 {
   setName("Aharshuu")
   setCount(count+1)
 }
 function changeAge(){
   setAge("19")
   setCount(count+1)
 }
return (
  <div className="container">
      <button onClick = {()=>changeName()}>Name</button>
      <button onClick = {()=>changeAge()}>Age</button>
       <h1>{name}</h1>
       <h1>{age}</h1>
       <h1>{count}</h1>
  </div>
)
}
export default UseEff;