import React from "react";
class Header extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        return <div>
                 <h1>This is a Header component</h1>
                 <h3>messsage value:{this.state.msg}</h3>
                 <button onClick={this.gmHandler}>Gm</button>
                 <button onClick={this.gnHandler}>GN</button>
               </div>
    }
}
export default Header