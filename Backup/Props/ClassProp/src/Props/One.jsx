import react from 'react'
import Two from './Two'
class One extends react.Component{
    eid=108
    ename="Siva"
    render(){
        return <div>
            <h1>This is a One Component</h1>
            <h2>eid={this.eid}</h2>
            <Two esal={45630} ecompany={"TCS"}/>
        </div>
    }
}
export default One