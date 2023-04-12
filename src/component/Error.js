import { Link } from "react-router-dom";

const Error=()=>
{
    return (<div>
        <h2>Error</h2>
        <p>invalid url please go back to home page</p>
        <button className="btn"><Link to={'/'}>Back to Home</Link></button>
    </div>)
}
export default Error;