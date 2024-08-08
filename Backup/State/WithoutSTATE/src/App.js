import react from 'react'
import User from './Components/User'
class App extends react.Component{
    render(){
        return <div>
            <h1>This is a App Component</h1>
            <User/>
        </div>
    }
}
export default App