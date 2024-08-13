
import {Link} from 'react-router-dom'
import './Static/One.css'
import './Static/Two'



let Nav=()=>{
    return <>
            {/* <nav className="menu-bar" id='Menubar'>
                <a href="#" id='Logo'>Logo</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        
                        <li><a href="./home" className='nav-link'>Home</a></li>
                        <li><Link to="./About" className="nav-link">About</Link></li>
                        <li><Link to="./Services" className="nav-link">Services</Link></li>
                        <li><Link to="./Contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
                
            </nav> */}
              <div class="container">
        <nav class="menu-bar">
            <div class="menu-icon" id="menu-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="menu-items" id="menu-items">
            <li><a href="./home" className='nav-link'>Home</a></li>
                        <li><Link to="./About" className="nav-link">About</Link></li>
                        <li><Link to="./Services" className="nav-link">Services</Link></li>
                        <li><Link to="./Contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
        <main id='main'>
            <h1>Welcome to Our Website</h1>
            <p>This is the main content area.</p>

        </main>
    </div>
           </>
}
export default Nav