import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

const Gameplay = () => {
 
  
  return (
    <Main>
    <div className='top_section'>
    <TotalScore/>
    <NumberSelector/>
    </div>
    <div className='bottom_section'>
    <RollDice/>
    </div>
    </Main>
   
  )
}

export default Gameplay

const Main=styled.div`
  max-width: 1280px;
.top_section{
  margin-left: 50px;
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
}

`
