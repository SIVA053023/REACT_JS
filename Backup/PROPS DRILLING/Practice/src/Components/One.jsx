import Two from "./Two"
let One=(props)=>{
    return<>
          <h1>This is a One component</h1>
          <pre>{JSON.stringify(props)}</pre>
          <Two id={props.One[0]}/>

         </>
}
export default One