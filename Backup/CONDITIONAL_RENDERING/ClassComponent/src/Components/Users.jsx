import Axios from 'axios'
import react from 'react'
class Users extends react.Component{
    state={users:[]}
  componentDidMount(){                      // Executes automatically after the render method    no neeed to give the extra button or anything to execute
//     get_users=()=>{
        
//   }
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
                 {/* <button onClick={this.get_users} style={{backgroundColor:"green"}}>get_details</button> */}

                 {/* Conditional Rendering */}  
                 this.state.users.length > 0 ? <>
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
                 </div></> : <h2>NO data</h2>
                 <div>
                   
               </>
    }
}
export default Users