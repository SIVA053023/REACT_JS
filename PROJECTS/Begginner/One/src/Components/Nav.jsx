import one from '../Images/Logo.png'
import "./Style.css"
let Nav=()=>{
    return <>
            <nav>
                <a href="#" id='brand'><img src={one} alt="" /></a>
                <ul>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Servicves</li>
                    <li href="#">Contact</li>
                </ul>
                <button id='loginbtn'>Login</button>
            </nav>
    
          </>
}
export default Nav