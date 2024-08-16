import CompD from "./CompD"
let CompC=(props)=>{
  
    let emp={
        eid:101,
        ename:"Siva",
        esal:45000
    }
    return<>
    <h1>This is a ComponentC</h1>
    <pre>{JSON.stringify(props)}</pre>
    <CompD emp_data={emp.eid}/>
         </>
}
export default CompC