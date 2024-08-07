import react from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Slider from './Components/Slider'



class App extends react.Component{
    render(){
        return <div>
            <h1>This is a App Component</h1>
            <Footer/>
            <Header/>
            <Slider/>
        </div>
    }
}
export default App