import Home from "./Html/Home";
import About from "./Html/About";
import Services from "./Html/Services";
import Contact from "./Html/Contact";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from "./Nav";

let App=()=>{
    return <div>
        <Router>
            <Nav/>
            <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </div>
}
export default App