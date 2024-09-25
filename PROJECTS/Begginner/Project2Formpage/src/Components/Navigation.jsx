import one from './navigation.module.css'
let Navigation=()=>{
    return <>
            <nav className={one.navbar}>
                <a href="#"><img src="/Images/Logo.avif" alt="" className="logo" /></a>
                <ul>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Services</li>
                    <li href="#">Contact</li>
                </ul>
            </nav>
          </>
}
export default Navigation