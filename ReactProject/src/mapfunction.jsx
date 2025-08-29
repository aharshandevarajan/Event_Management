function Taskprops(props){
    return(
        <>
        {
         props.value.map((e)=>(
         <h1>{e.Name}</h1>
         ))
        }
        </>
    )
}
function Propss(){
    const  Student=[
       { Name:"Aharshan",
        Dept:"ECE"
    },
    {
       Name:"Darshan",
       Dept:"ECE"
    }
    ]
    return(
       <>
        <p> POPS Mammey </p>
        <Taskprops value= {Student}/>
        </>
    )
}
export default Propss;
