import react from 'react'
import State from './Components/State'
class App extends react.Component{
    render(){
        return <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="#" className=' navbar-brand'>BOOTSTRAP</a>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><a href="" className='nav-link'>Home</a></li>
                        <li><a href="" className='nav-link'>About</a></li>
                        <li><a href="" className='nav-link'>Services</a></li>
                        <li><a href="" className='nav-link'>Contact</a></li>
                    </ul>
                    
                </div>

            </nav>
            <h1>This is App component</h1>
            <State/>

        </div>
    }
}
export default App