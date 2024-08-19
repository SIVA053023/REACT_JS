import ClassC from './ClassC'
let ClassB=(props)=>{
//   const{id,ename,esal}=props.Emp_data
//    const data=[id,ename,esal]
  
    return <>
          <h1>This is a B Component</h1>
          <pre>{JSON.stringify(props)}</pre>
          <ClassC sal={props.Emp_data.esal} email={[props.Emp_data.email,props.Emp_data.esal]}/>
        
    
    </>
}
export default ClassB