// import { useState } from "react";

// let Registration=()=>{

//     let[users,Setusers]=useState({username:"",mobilenumber:"",checkbox:""})
//     let submitHandler=(event)=>{
//         event.preventDefault();
//         // Axios.post=().then().catch
//         console.log(users)
//       }
//       let UpdateHandler=(event)=>{
//         if(checkboxr===true){
//             Setusers({...users,[event.target.name]:event.target.value})
//         }
       
//       }
//       let checkboxhandler=(event)=>{
//         Setusers({...users,checkBox:event.target.checkBox})
//       }

//     return  <>
//                <pre>{JSON.stringify(users)}</pre>
//                <div className="container">
//                 <div className="row">
//                     <div className="col-md-5">
//                         <div className="card">
//                             <div className="card-header bg-primary">
//                                 <h4>Registration form</h4>

//                             </div>
//                             <div className="card-body">
//                                <form onSubmit={submitHandler} className="form-group">
//                                <input type="text" placeholder="username" name="username" onChange={UpdateHandler}/> <br /> <br />
//                                 <input type="number" placeholder="mobile number" name="mobilenumber"  onChange={UpdateHandler}/> <br /> <br />
//                                 <input type="checkbox"  onChange={checkboxhandler}/> Accept  T&Conditions <br /> <br />
//                             {
//                               checkboxhandler===true ? <div>
//                                 return <input type="submit" value='register' className="bg-light" name="" id="" />
                                
//                               </div> : <h2>not submitted</h2>
                                  
//                             }
                               
                                
//                                </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                </div>
    
//             </>

// }
// export default Registration/

// WAY 2

// import { useState } from "react";

// let Registration = () => {
//   // State to keep track of user data and checkbox state
//   let [users, setUsers] = useState({ username: "", mobilenumber: "", checkBox: false });

//   // Handler for form submission
//   let submitHandler = (event) => {
//     event.preventDefault();
//     // Add Axios.post or other submission logic here
//     console.log(users);
//   };

//   // Handler for input changes
//   let updateHandler = (event) => {
//     // If the changed input is the checkbox, update its state
//     if (event.target.type === "checkbox") {
//       setUsers({ ...users, [event.target.name]: event.target.checked });
//     } else {
//       setUsers({ ...users, [event.target.name]: event.target.value });
//     }
//   };

//   return (
//     <>
//       <pre>{JSON.stringify(users)}</pre>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-5">
//             <div className="card">
//               <div className="card-header bg-primary">
//                 <h4>Registration form</h4>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={submitHandler} className="form-group">
//                   <input
//                     type="text"
//                     placeholder="username"
//                     name="username"
//                     onChange={updateHandler}
//                   />
//                   <br />
//                   <br />
//                   <input
//                     type="number"
//                     placeholder="mobile number"
//                     name="mobilenumber"
//                     onChange={updateHandler}
//                   />
//                   <br />
//                   <br />
//                   <input
//                     type="checkbox"
//                     name="checkBox"
//                     checked={users.checkBox}
//                     onChange={updateHandler}
//                   />
//                   Accept T& Conditions
//                   <br />
//                   <br />
//                   {users.checkBox ? (
//                     <input
//                       type="submit"
//                       value="register"
//                       className="bg-light"
//                     />
//                   ) : (
//                     <h2>Not submitted</h2>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Registration;

// WAY 3

import { useState } from "react";

let Registration = () => {
  // State to keep track of user data and checkbox state
  let [users, setUsers] = useState({ username: "", mobilenumber: "", checkBox: false });

  // Handler for form submission
  let submitHandler = (event) => {
    event.preventDefault();
    // Add Axios.post or other submission logic here
    console.log(users);
  };

  // Handler for input changes
  let updateHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setUsers({ ...users, [name]: checked });
    } else {
      setUsers({ ...users, [name]: value });
    }
  };

  return (
    <>
      <pre>{JSON.stringify(users)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-primary">
                <h4>Registration form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler} className="form-group">
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={updateHandler}
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    placeholder="mobile number"
                    name="mobilenumber"
                    onChange={updateHandler}
                  />
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    name="checkBox"
                    checked={users.checkBox}
                    onChange={updateHandler}
                  />
                  Accept T& Conditions
                  <br />
                  <br />
                  <input
                    type="submit"
                    value="Register"
                    className="bg-light"
                    disabled={!users.checkBox}  // Disable submit button if checkbox is not checked
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

