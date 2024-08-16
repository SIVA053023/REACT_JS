import CompB from "./CompB"
let CompA=()=>{
  let ename="Siva"
    return<>
    <h1>This is a ComponentA</h1>
    <CompB ename={ename} esal={45000}/>
         </>
}
export default CompA