import Axios from "axios"
import { useState } from "react"

let Users=()=>{
      
    let[users,Setusers]=useState([])

      let get_users=()=>{
            
             Axios.get('https://jsonplaceholder.typicode.com/users')
                .then((resp)=>{
                    console.log(resp)
                    console.log(resp.data)
                    Setusers(resp.data)})
                .catch((err)=>{console.log(err.message)})
      }

return<>
        <div>
            <h3>Users Component</h3>
            <button onClick={get_users}>Get_users</button>
            <pre>{JSON.stringify(users)}</pre>
        
        </div>
        <table>
            <thead>
                <tr>id</tr>
                <tr>name</tr>
                <tr>email</tr>
                
            </thead>
            <tbody border={2}>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </>
}
export default Users
// import axios from 'axios';
// import { useState } from 'react';

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = () => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         setUsers(response.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <div>
//       <h3>Users Component</h3>
//       <button onClick={getUsers}>Get Users</button>
//       <pre>{JSON.stringify(users)}</pre>
//     </div>
//   );
// };

// export default Users;
