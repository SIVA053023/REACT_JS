import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'

const Gameplay = () => {
  return (
    <Main>
    <div>
    <TotalScore/>
    </div>
    <div>
    <NumberSelector/>
    </div>
    
    </Main>
   
  )
}

export default Gameplay

const Main=styled.div`
  display: flex;
  justify-content: space-around;
`
