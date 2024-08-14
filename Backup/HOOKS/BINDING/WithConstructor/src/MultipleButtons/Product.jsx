import react from 'react'

class Product extends react.Component{
        state;
        updateHandler;
       
    constructor(props){
          super(props);
          this.state={
            msg:"hello"
        }
        this.updateHandler=(value)=>{
            this.setState({msg:value})
        }

    }
    
    render(){
        return<>
        <h1>This is a Product component</h1>
        <h2>{this.state.msg}</h2>
        
            <button onClick={this.updateHandler.bind(this,"Good morning")}>Gm</button>
        <button onClick={this.updateHandler.bind(this,"Good night")}>GN</button>
        <button onClick={this.updateHandler.bind(this,"Good Afternooon")}>GA</button>
        <button onClick={this.updateHandler.bind(this,"Good Evining")}>GE</button>


        </>
    }
}
export default Product