// import React from 'react'
// // import styled from 'styled-components'
// import HeaderComponent from './Components/HeaderComponent'

// const App = () => {
//   return (
//      <>
//      <HeaderComponent/>
//      </>
   
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/Header/HeaderComponent';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;

