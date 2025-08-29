import { Link}from 'react-router-dom'
function header()
{
    return(
    <div class="Task3">
        <p className="Home"><Link to={"/home"}>Home</Link></p>
        <p className="About"><Link to={"/page"}>About</Link></p>
        <p className="Info"><Link to={"/Info"}>Info</Link></p>
        <div className="Button">
        <button className="Login"><Link to={"/Login"}>Login</Link></button>
        <button className="Logout"><Link to={"/Logout"}>Logout</Link></button>
        </div>
    </div>

)}
export default header;