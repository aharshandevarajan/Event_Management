import { useState } from "react";

function Login_Task(){
    const[name,setname] = useState("");
    const[age,setage] = useState();
    const[gender,setgender] = useState("");
    const[print,setprint] = useState([]);
    function changeName(e){
        setname(e.target.value);
    }
    function changeAge(e){
        setage(e.target.value);
    }
    function ChangeGender(e){
        setgender(e.target.value);
    }
    function deleting(index){
        console.log()
        setprint(print.filter((x,y)=>index!=y));
    }
    function ChangePrint(e){
        e.preventDefault();
        setprint([...print,{ name: name, age: age , gender:gender}]);
        setname("");
        setage("");
        setgender("")
    }
    return(
        <>
        <div className="Login">
            <form onSubmit={(e)=>ChangePrint(e)}>
                <div className="Name">
                    <label className="N"><b>Name</b></label><br/><br/><br/>
                    <input className="box1" type="text" required value={name} placeholder="Name" onChange={(e)=>changeName(e)}/><br/>
                </div>
                <div className="Age">
                    <label className="A"><b>Age</b></label><br/><br/><br/>
                    <input className="box2" type="number" required value={age} placeholder="Age" onChange={(e)=>changeAge(e)}/><br/>
                </div>
                <label className="Gend"><b>Gender</b></label><br/><br/>
                <div className="Gender">
                    
                    <div className="G1">
                            <label>Male</label>
                        <input className="Ge" type="radio" name="Gender" value="male" onChange={(e)=>ChangeGender(e)}/>
                    </div>
                    <div className="G2">
                            <label className="">Female</label>
                        <input className="Ge" type="radio" name="Gender" value="Female" onChange={(e)=>ChangeGender(e)}/>
                    </div>
                     
                </div>
                <button className="submit" type="submit">Sumbit</button>
            </form >

            
        </div>
            
                <div className="Print">
                    {
                    print.map((value,index)=>(
                        <div className="Printing">
                            
                            <div>
                                <p><b>{value.name}</b></p>
                            </div>
                            <div>
                                {
                                    
                                }
                                <p><b>{value.age}</b></p>
                            </div>
                            <div>
                                 <p><b>{value.gender}</b></p>
                            </div>
                            <div>
                                <button onClick={()=>deleting(index)} className="del">Delete</button>
                            </div>
                        
                        </div>
                    ))
                }
                </div>
            
        </>
    )
}
export default Login_Task;
