import ClassB from './ClassB'

let ClassA=()=>{
    let Emp={
        id:101,
        ename:"Siva Krishna",
        esal:45000,
        email:"Sivakrishna053936@gmail.com"
    }
    return <>
          <h1>This is a A Component</h1>
          <ClassB Emp_data={Emp}/>
    
    </>
}
export default ClassA