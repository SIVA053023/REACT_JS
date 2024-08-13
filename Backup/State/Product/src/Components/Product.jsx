import react from 'react'
class Product extends react.Component{
    state={
        qty:1
    }
    increhandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }

    render(){
        return <>
              <button onClick={this.decrHandler}>-</button>
              <button onClick={this.increhandler}>+</button>
              
              </>
    }
}
export default Product