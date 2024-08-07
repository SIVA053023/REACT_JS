import react from 'react'
import Employee from './Employee'
class User extends react.Component{
    render(){
        return <div>
            <h1>This is a User Component</h1>
            <Employee prop1={"GE"} prop2={100}/>
        </div>
    }
}
export default User