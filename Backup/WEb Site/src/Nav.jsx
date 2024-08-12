import Home from "./Html/Home";
import About from "./Html/About";
import Services from "./Html/Services";
import Contact from "./Html/Contact";
import {Link} from 'react-router-dom'



let Nav=()=>{
    return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li><Link to="./Home" className="nav-link">Home</Link></li>
                        <li><Link to="./About" className="nav-link">About</Link></li>
                        <li><Link to="./Services" className="nav-link">Services</Link></li>
                        <li><Link to="./Contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
                
            </nav>
           </>
}
export default Nav