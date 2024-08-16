let Employee=()=>{
    let Employees=[{id:101,ename:"Siva",email:"Siva053@gamil.com"},
        {id:102,ename:"Krishna",email:"Krishna023@gmail.com"}
    ]
    return <>
             <h1>This is a Employee Data</h1>

             <div>
                <table border={2}>
                    <tHead>
                       <tr> <th>Id</th>
                        <th>Ename</th>
                        <th>Email</th></tr>
                    </tHead>
                    <tbody>
                        {
                            Employees.map((emp)=>{
                                      return <tr key={emp.id}>
                                                  <td>{emp.id}</td>
                                                  <td>{emp.ename}</td>
                                                  <td>{emp.email}</td>
                                             </tr>
                            })
                        }
                    </tbody>
                </table>
             </div>
    
           </>
}
export default Employee