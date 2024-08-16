import CompC from "./CompC"
let CompB=(props)=>{
    return <>
          <h1>This is a ComponentB</h1>
          <pre>{JSON.stringify(props)}</pre>
          <hr />
          <CompC name={props.ename}/>
    </>
}
export default CompB