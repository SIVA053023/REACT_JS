import { useState } from 'react'
import './log.css'

let Login=()=>{

    let[users,Setusers]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        Setusers({...users,email: event.target.value})
    }
    let PasswordHandler=(event)=>{
                Setusers({...users,password:event.target.value})
    }
    let submitHandler=(event)=>{
      event.preventDefault();
      // Axios.post=().then().catch
      console.log(users)
    }
        
    return <>
       
        <pre>{JSON.stringify(users)}</pre>
        
         <form onSubmit={submitHandler}>
          
           <div>
           <label >Email</label>
           <input type="email" onChange={emailHandler} required />   <br />
           </div>
            <label  required>Password</label>
            <input type="text"  onChange={PasswordHandler} /> <br />
            <input type="submit"  value='login' className="bg-primary"/>

         </form>
           </>
}
export default Login