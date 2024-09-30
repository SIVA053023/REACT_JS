import React from 'react'
import style from './StartGame.module.css'

const StartGame = () => {
  return (
      <>
       <div className={style.startmain}>
            <div>
            <img src="/Images/dices.png" alt=""  className={style.startimg}/>
            </div>
            <div className={style.startcontent}>
                <h1>DICEGAME</h1>
                <button>Startgame</button>
            </div>
       </div>
      </>
  )
}

export default StartGame

