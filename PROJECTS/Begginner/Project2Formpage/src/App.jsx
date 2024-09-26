import Navigation from "./Components/Navigation/Navigation"
import './App.css'
import ContactHeader from "./Components/ConatctHeader/ContactHeader"

import Contactform from "./Components/Contactform/Contactform"

let App=()=>{
  return <div>
    <Navigation/>
    <main className="main_container">
    <ContactHeader/>
    <Contactform/>
    </main>
   
    
  </div>
}

export default App
