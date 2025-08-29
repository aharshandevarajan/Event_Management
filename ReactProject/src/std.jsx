import React, { useEffect } from 'react'

function Std() {
    async function fetchstudent(){
     const  response = await fetch("http://localhost:5904/student/alluser")
    const data = await response.json();
    console.log("gdgd")
    console.log(data)
    }
    useEffect(()=>{
        fetchstudent();
    },[])
  return (
<div>
    <h1>hello</h1>
</div>
  )}
  export default Std;