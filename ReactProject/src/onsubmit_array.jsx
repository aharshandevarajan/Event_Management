import { useState } from "react";
function New(){
    const[name , setName] = useState("");
    const[print,setPrint] = useState([]);
    function change(e){
        setName(e.target.value);
    }
    function handleSumbit(e){
        e.preventDefault();
        setPrint([...print,name]);
        setName("");
    }
    return(
        <div>
         <form onSubmit={(handleSumbit)}>
        <label>Name </label>
        <input type="text" value={name} onChange={(e)=>{
            change(e);
            {console.log(e);}
            {console.log(e.target);}
            {console.log(e.target.value);}
        }}/>
        <button type="submit">submit</button>
        </form>
       {print.map((e)=>
            <p>{e}</p>
        )}
        </div>
    )
}
export default New ;