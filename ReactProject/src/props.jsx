function World(props){
    return (
    <div className="name">
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    </div>
    )
}

function main(){
    return (
        <>
            <h1>Hello</h1>
            <div className="dataFlex">
                <World name="world" age={35} />
                <World name="My age is" age={19} />
                <World name="Jackkie Chan" age={55} />
            </div>
            
        </>
    );
}
export default main;