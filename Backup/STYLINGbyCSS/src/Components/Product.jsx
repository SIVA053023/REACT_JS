import one from './iphone_13.jpg'
import two from './iphone5s.jpg'
import { useState } from 'react'
import './Style.css'                     // External styling

let Product=()=>{
    let [p_name,Setp_name]=useState('Test')
    let updateHandler=(value)=>{
        Setp_name(value)
    }

   let three={color:'green'}  

    return<>
            <h1 style={{backgroundColor:'yellow'}}>This is a Product component</h1>      {/* in line Styling*/ }
            <h2 style={three}>{p_name}</h2>                                              {/* this is a Internal Styling */}
           <button onClick={()=>updateHandler("this is a iphone 13")}><img src={one} alt="" /></button>
            <button onClick={()=>updateHandler("this is a iphone5s")}><img src={two} alt="" /></button>
            {/* <button onClick={updateHandler.bind(null, "iphone5s")}></button>
            <button onClick={updateHandler.bind(null, "iphone 13")}></button> */}
            {/* <img src={one} alt="" onClick={updateHandler.bind(null, "iphone5s")} />
            <img src={two} alt="" onClick={updateHandler.bind(null, "iphone 13")}/> */}
                 
          </>
}
export default Product