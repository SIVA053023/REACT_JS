import './log.css'

let Login=()=>{
    return <>
         <form>
            <label >Email</label>
            <input type="email" required />   <br />
            <label  required>Password</label>
            <input type="text" /> <br />
            <input type="submit"  value='login' className="bg-primary"/>

         </form>
           </>
}
export default Login