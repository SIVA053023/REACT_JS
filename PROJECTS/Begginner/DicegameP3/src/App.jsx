
import { useState } from 'react'
import StartGame from './Components/StartGame'
import Gameplay from './Components/Gameplay';

function App() {

  const [isGamestarted, setisGamestarted]=useState(true);        
   const toggleGameplay=()=>{
    setisGamestarted((prev)=> !prev )
   }
  return <>  {isGamestarted  ? <Gameplay /> :  <StartGame
            toggle={setisGamestarted}/>} 
        </>
  
}

export default App
