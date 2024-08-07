let Employee=(props)=>{
    return <div>
              <h2>Employee Component</h2>
              <pre>{JSON.stringify(props)}</pre>
              <h3>Employee_Id:{props.id}</h3>
              <h3>Emp_name:{props.name}</h3>
           </div>
}
export default Employee