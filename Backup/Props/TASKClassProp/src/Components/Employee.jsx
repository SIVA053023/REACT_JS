import react from 'react'
class Employee extends react.Component{
    render(){
        return <div>
            <h1>This is a Employee Component</h1>
            <pre>{JSON.stringify(this.props)}</pre>
        </div>
    }
}
export default Employee