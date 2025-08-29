function Data(props)
{
  return (

    <>
    {
     props.value.map((e)=>(
        <h1>{e.title}</h1>
     ))
    }
    </>
  )
}







function Task()
{
    const movies = [
    { title: "Leo", year: 2023, collection: "₹600 Cr" },
    { title: "Jailer", year: 2023, collection: "₹650 Cr" },
    { title: "RRR", year: 2022, collection: "₹1200 Cr" },
    { title: "Vikram", year: 2022, collection: "₹450 Cr" },
    { title: "KGF Chapter 2", year: 2022, collection: "₹1250 Cr" },
    { title: "Ponniyin Selvan: I", year: 2022, collection: "₹500 Cr" },
    { title: "Pushpa: The Rise", year: 2021, collection: "₹365 Cr" },
    { title: "Baahubali 2", year: 2017, collection: "₹1810 Cr" },
    { title: "Master", year: 2021, collection: "₹230 Cr" },
    { title: "Mersal", year: 2017, collection: "₹260 Cr" }
];
  return (
    <>
    
        <h1>Movies</h1>
        <Data value= {movies}/>
    
    </>
  )
}
export default Task;

