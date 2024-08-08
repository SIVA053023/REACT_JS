import react from 'react'
class State extends react.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:" Good morning"})
    }
    gnHAndler=()=>{
        this.setState({msg:"Goodnight"})
    }
    render(){
        return <div>
                  <h1>This is a State msg</h1>
                  <h2>{state.msg}</h2>
                  <button onClick={this.gmHandler}>GM</button>
                  <button onClick={this.gnHAndler}>GN</button>
               </div>
    }
}
export default State;