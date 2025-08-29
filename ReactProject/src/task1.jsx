import { useState } from "react"
import './task1.css'
function Ahar(){
    const[count,setCount]=useState(0);
    function buttonclick()
    {
        setCount(count+1)
    }
    function reset()
    {
       setCount(0)
    }
    function decrement(){
    if(count>0)
    {
        setCount(count-1)
    }
}
    return(
        <>
        <div className="container">
     <button className="Increment"  onClick={buttonclick}>Increment</button>
     <button className="Reset" onClick={reset}>Reset</button>
     <button className="Decrement" onClick={decrement}>Decerement</button>
     </div>
     <h1 className="count">Count:{count}</h1>
     </>
    )
}
export default Ahar;