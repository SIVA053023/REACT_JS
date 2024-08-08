import react from 'react'
import Header from './StateComponents/Header'
class App extends react.Component{
    render(){
        return <div>
            <h1>This is a App component</h1>
            <Header/>
        </div>
    }
}
export default App