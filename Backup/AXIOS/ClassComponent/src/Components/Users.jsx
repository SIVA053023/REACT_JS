import Axios from 'axios'
import react from 'react'
class Users extends react.Component{
    state={users:[]}
    get_users=()=>{
          Axios.get('https://jsonplaceholder.typicode.com/users')
          .then((resp)=>{
                this.setState({users:resp.data})
          })
          .catch((err)=>{
              console.log(err.message)
          })
    }
    render(){
        return <>
                 <h1>This is a Users Component</h1>
                 <pre>{JSON.stringify(this.state.users)}</pre>
                 <button onClick={this.get_users} style={{backgroundColor:"green"}}>get_details</button>
                 <div>
                    <table border={2}>
                        <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        </thead>
                        <tbody>
                            {
                            this.state.users.map((user)=>{
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                            }
                        </tbody>
                        
                    </table>
                 </div>
               </>
    }
}
export default Users