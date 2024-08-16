import React from 'react'

const Product = () => {
 let[msg,Setmsg]=useState("Hello")
 let updateHandler=(value)=>{
    this.Setmsg({msg:value})
 }
    
  return (
    <div>
        <h1>This is a Product component</h1>
        <button onClick={updateHandler.bind(null,"Good morning")}>GM</button>
        <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
        <button onClick={updateHandler.bind(null,"Good Evining")}>GE</button>
        <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>


    
    </div>
  )
}

export default Product