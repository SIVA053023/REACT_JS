import react from 'react'
import User from './Component/User'
class App extends react.Component{
    render(){
        return <div>
            <h1>This is a App component</h1>
           <User/>
        </div>
    }
}
export default App