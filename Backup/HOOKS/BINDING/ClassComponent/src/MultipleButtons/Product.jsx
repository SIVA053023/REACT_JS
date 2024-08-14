import react from 'react'

class Product extends react.Component{
    state={
        msg:"hello"
    }
    // gmHandler=()=>{
    //     this.setState({msg:"Good morning"})
    // }
    // gnHandler=()=>{
    //     this.setState({msg:"Good Night"})
    // }
    // gAHandler=()=>{
    //     this.setState({msg:"Good Afternoon"})
    // }
    // gEHandler=()=>{
    //     this.setState({msg:"Good Evining"})
    // }
    updateHandler=(value)=>{
        this.setState({msg:value})
    }

    render(){
        return<>
        <h1>This is a Product component</h1>
        <h2>{this.state.msg}</h2>
        {/* <button onClick={this.gmHandler}>Gm</button>
        <button onClick={this.gnHandler}>GN</button>
        <button onClick={this.gAHandler}>GA</button>
        <button onClick={this.gEHandler}>GE</button> */}
            <button onClick={this.updateHandler.bind(this,"Good morning")}>Gm</button>
        <button onClick={this.updateHandler.bind(this,"Good night")}>GN</button>
        <button onClick={this.updateHandler.bind(this,"Good Afternooon")}>GA</button>
        <button onClick={this.updateHandler.bind(this,"Good Evining")}>GE</button>


        </>
    }
}
export default Product