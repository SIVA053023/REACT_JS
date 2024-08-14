import { useState } from "react"

let Product=()=>{
    let [msg,setMsg]=useState("Hello")
   let updatHandler=(Value)=>{
        setMsg(Value)
    }
    
    return <>
    <h1>This is a Product comonent</h1>
    <h2>Value:{msg}</h2>
   <button onClick={updatHandler.bind(null,"Good morning")}>Gm</button>
   <button onClick={updatHandler.bind(null,"Good night")}>GN</button>
   <button onClick={updatHandler.bind(null,"Good Afternoon")}>GA</button>
   <button onClick={updatHandler.bind(null,"Good Evining")}>GE</button>
    
    </>
}
export default Product