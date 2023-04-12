import { Link } from "react-router-dom"
const Home=()=>
{
    return (<div>
        <h2>Home page</h2>
        <Link to='/about' className="btn">About</Link>
        <Link to='/product' className="btn">Product</Link>
    </div>)
}

export default Home;