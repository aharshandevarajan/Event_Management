import { useState } from "react";
function Ahar(){
    const [Add,setAdd]=useState(0);
    function add()
    {
        setAdd(Add+1)
    }
    return(
        <div>
            <h1>{Add}</h1>
            <button onClick={add}>Increment</button>
        </div>
    )
}
export default Ahar;