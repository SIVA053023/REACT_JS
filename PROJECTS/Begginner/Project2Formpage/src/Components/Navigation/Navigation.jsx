import style from './navigation.module.css'
let Navigation=()=>{
    return <>
            <nav className={style.navbar}>
                <a href="#"><img src="/Images/Logo.avif" alt="" className={style.logo} /></a>
                <ul className={style.ul}>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Services</li>
                    <li href="#">Contact</li>
                </ul>
            </nav>
          </>
}
export default Navigation