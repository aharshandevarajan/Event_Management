import { useState } from "react";

function Condition(){
    const[open,setopen] = useState(false);
    function ChangeCondition(){
        setopen(true);
    }
    return(
        <div>
            <button onClick={()=>ChangeCondition()}>open text</button>
            {
                open && <input type="text" placeholder="Enter Name"/>
            }
        </div>
    )
}
export default Condition;