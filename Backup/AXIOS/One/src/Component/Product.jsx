// import {useState} from 'react'
// import Axios from 'axios'
// let Product=()=>{
//     let[users,Setdata]=useState([])
//     let get_users=()=>{
//        Axios.get('http://127.0.0.1:8080/emp/read')
//        .then((resp)=>{
//              console.log(resp)
//              console.log(resp.data)
//              Setdata(resp.data)
//        }).catch((err)=>{
//                console.log(err.message)
//        })
//     }
//           return<>

//                 <div>
//                     <h1>This is a Product component</h1>
//                     <button onClick={get_users}>get_users</button>
//                     <pre>{JSON.stringify(users)}</pre>
//                 </div>
//                 </>
// }
// export default Product
import { useState } from 'react';
import Axios from 'axios';

const Product = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err.message);
      });
  };

  return (
    <>
      <div>
        <h1>This is a Product component</h1>
        <button onClick={getUsers}>Get Users</button>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
};

export default Product;
  