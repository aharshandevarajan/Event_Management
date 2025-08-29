function Taskprops(props){
    return (
    <>
      <h1>Hello world</h1>
       <h1>{props.value.Name}</h1>
       <h1>{props.value.Branch}</h1>   
       <h1>{props.value.Age}</h1>
    </>
    )
}
function Propss(){
    const student=
    {
        Name:"Aharshan",
        Branch:"ECE",
        Age:"19"
}


    return (
        <>
            <h1>Hello</h1>
            < Taskprops value={student} />
        </>
    );
}
export default Propss;