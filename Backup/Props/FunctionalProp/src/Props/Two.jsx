import One from './One'
let Two=()=>{
    let eid=101;
    let ename="Siva";
    return <div>
             <h1>eid:{eid}</h1>
             <h2>ename:{ename}</h2>
             <One eid={eid}/>
    </div>
}
export default Two