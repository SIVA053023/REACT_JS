import {useState} from 'react'
let Product=()=>{
    let [msg,func]=useState("Hello")
    return <div>
        <h1>This is  product component</h1>
        <h2>{msg}</h2>
        <button onClick={()=>{func("Good morning")}}>Gm</button>
        <button onClick={()=>{func("Good Night")}}>Gn</button>
        
    </div>
}
export default Product