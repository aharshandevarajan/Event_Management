import { useState } from "react";
function Update(){
    const[name,setName]=useState("")
    const[submittedName,setSubmittedName]=useState("")
function handlesubmit(e){
    e.preventDefault();
    setSubmittedName(name)
    setName("")
}
return(
    <div>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
        {submittedName && ( <h1>submittedName:{submittedName}</h1>)}
    </div>
)
}
export default Update