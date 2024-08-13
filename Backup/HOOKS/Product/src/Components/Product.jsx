import { useState } from "react"

    

let Product=()=>{
   let[qty, setMsg]=useState(1)
//    let increHandler=()=>{
//     setMsg(qty+1)
// }
// let decreHandler=()=>{
//     setMsg(qty-1)
// }

return <>
        <h1>No of quatities:{qty}</h1>
        {/* method1 */}
        {/* <button onClick={increHandler}>+</button>
        <button onClick={decreHandler}>-</button> */} 

        {/* Method2     */}
        
        <button onClick={()=>{setMsg(qty-1)}}>-</button>
        <button onClick={()=>{setMsg(qty+1)}}>+</button>
       


       </>

}
export default Product
