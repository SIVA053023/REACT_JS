import react from 'react'
import './App.css'
// import "../public/images"
let App=()=>{
  return <>
       <div>
          <nav>
            <div className='logo'>
              <img src="../public/images/Logo.png" alt="" />
            </div>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
            <button>Login</button>
          </nav>
       </div>
     
  </>
}
export default App