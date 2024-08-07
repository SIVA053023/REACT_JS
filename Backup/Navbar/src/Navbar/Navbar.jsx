import react from 'react'

let Navbar=()=>{
    return <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#">BOOTSTRAP</a>
        <div className='ml-auto'>
            <ul >
                <li><a href="#" className='nav-link'>Home</a></li>
                <li><a href="#" className='nav-link'>About</a></li>
                <li><a href="#" className='nav-link'>Services</a></li>
                <li><a href="#" className='nav-link'>Contact</a></li>
            </ul>
        </div>

    </nav>
}
export default Navbar