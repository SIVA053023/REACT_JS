import react from 'react'
class Two extends react.Component{
    render(props){
        return <div>
            <h2>This is a Two Component</h2>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    }
}
export default Two