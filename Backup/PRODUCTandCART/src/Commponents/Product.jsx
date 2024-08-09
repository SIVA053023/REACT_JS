import react, { Fragment } from 'react'
import Cart from './Cart'

class Product extends react.Component{
    products;
    constructor(prop){
           super(prop)
           console.log("First executed")
           this.products={p_id:101,
            p_name:"iphone 5S",
            price:55000,
            color:"Black"
           }
    }
    render(){
        return <Fragment>
               <Cart products={this.products}/>
        </Fragment>
    }
}
export default Product