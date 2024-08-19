import one from './iphone_13.jpg'
import two from './iphone5s.jpg'
import { useState } from 'react'

let Product=()=>{
    let [p_name,Setp_name]=useState('Test')
    let updateHandler=(value)=>{
        Setp_name(value)
    }

    return<>
            <h1>This is a Product component</h1>
           <button onClick={()=>{"this is a iphone 13"}}><img src="./one" alt="" /></button>
            <button onClick={()=>{"this is a iphone5s"}}><img src="./two" alt="" /></button>
                 
          </>
}
export default Product