import {Link} from 'react-router-dom'

let Nav=()=>{
    return <>
                 <nav className="navbar navabar-dark bg-dark navbar-expand-lg">
            <a href="">Logo</a>
            <div className="ml-auto">

                <ul className="navbar-nav">
                    <li><Link to="/index" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                    <li><Link to="/Contact" className="nav-link">Contact</Link></li>
                    <li><Link to='/user' className="nav-link">Users</Link ></li>
                    <li><a href="/login" className="nav-link">login</a></li>

                </ul>
            </div>
          </nav>
         </>
}
export default Nav