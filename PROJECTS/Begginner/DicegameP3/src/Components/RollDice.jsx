import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = () => {
  const [currentDice,setCurrentDice]=useState(1);
  const GenerateRandomNumber=(min,max)=>{
    console.log(Math.floor(Math.random() * (max-min) + min) )
   return Math.floor(Math.random ()* (max-min) + min) 
   
  }
  const RollDice=()=>{
   const randomnumber= GenerateRandomNumber(1,7);
   setCurrentDice((prev)=>randomnumber)
  }
 

  return (
    <DiceContainer>
      <div className='dice' onClick={RollDice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size:24px
  }
  .dice{

  }
`