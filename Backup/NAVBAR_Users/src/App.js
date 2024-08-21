

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import About from './Components/About'
import Users from './Components/Users'
let App=()=>{
    return <div>
        <h1>This is a App component</h1>
        <Router>
            <Nav/>
          <Routes>
            <Route path='index' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='Contact' element={<Contact/>}/>
             <Route path='/user' element={<Users/>}/>
        </Routes>
        </Router>
       
     
        
    </div>
}
export default App