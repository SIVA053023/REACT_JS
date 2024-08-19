import ClassD from './ClassD'
let ClassC=(props)=>{
   
    return <>
          <h1>This is a C Component</h1>
          <pre>{JSON.stringify(props)}</pre>
          <ClassD sal={props.sal}/>
    
    </>
}
export default ClassC