import { useState } from "react";

function New() {
    const [name, setName] = useState("");
    const [print, setPrint] = useState([]);

    function 
change(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPrint([...print, name]);
        setName("");
    }
    function Delete(i){
       setPrint(print.filter((x,y)=>y!=i)
       )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        change(e);
                        console.log(e.target.value);
                    }}
                />
                <button type="submit">submit</button>
            </form>

            {print.map((item, index) => (
                <div className="items" key={index}>
                <p>{item} {index}</p>
                <button onClick={()=>Delete(index)} className="Del">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default New;

