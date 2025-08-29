import { useState } from "react";

function Login_Task(){
    const[name,setname] = useState("");
    const[age,setage] = useState();
    const[print,setprint] = useState([]);
    function changeName(e){
        setname(e.target.value);
    }
    function changeAge(e){
        setage(e.target.value);
    }
    function ChangePrint(e){
        e.preventDefault();
        setprint([...print,{ name: name, age: age }]);
        setname("");
        setage("");
    }
    return(
        <>
        <div className="Login">
            <form onSubmit={(e)=>ChangePrint(e)}>
                <div className="Name">
                    <label className="N">Name</label><br/><br/><br/>
                    <input className="box1" type="text" value={name} placeholder="Name" onChange={(e)=>changeName(e)}/><br/>
                </div>
                <div className="Age">
                    <label className="A">Age</label><br/><br/><br/>
                    <input className="box2" type="number" value={age} placeholder="Age" onChange={(e)=>changeAge(e)}/><br/>
                </div>
                <button type="submit">Sumbit</button>
            </form >

            
        </div>
            
                <div className="Print">
                    {
                    print.map((value,index)=>(
                        <div className="Printing">
                        <p className="Values">{value.name} — {value.age}</p>
                        <button className="del">Delete</button>
                        </div>
                    ))
                }
                </div>
            
        </>
    )
}
export default Login_Task;