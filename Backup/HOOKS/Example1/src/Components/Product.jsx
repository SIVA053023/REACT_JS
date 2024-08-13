import { useState } from "react"

    

let Product=()=>{
   let[msg, setMsg]=useState("Hello")
//    let gmHandler=()=>{
//     setMsg('Good morning')
// }
// let gnHandler=()=>{
//     setMsg('Good night')
// }

return <>
        <h1>{msg}</h1>
        {/* method1 */}
        {/* <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button> */} 

        {/* Method2     */}
         
        <button onClick={()=>{setMsg('good morning')}}>GM</button>
        <button onClick={()=>{setMsg('good night')}}>GN</button>


       </>

}
export default Product
