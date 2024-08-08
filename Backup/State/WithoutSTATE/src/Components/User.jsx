import react from 'react'

class User extends react.Component{

    msg="Hello"
    gmhandler=()=>{
        this.msg="Good Morning"
        this.forceUpdate()
    }
    render(){
        return <div>
                   <h1>message:{this.msg}</h1>
                   <button onClick={this.gmhandler}>GM</button>
               </div>

    }
}
export default User