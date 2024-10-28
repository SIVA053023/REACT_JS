import React from 'react'
import styled from 'styled-components'

const NumberSelector = () => {  
 const NumberArray=[1,2,3,4,5,6]
  return (

    <Container>
     {NumberArray.map((num,index)=>(
      <Box key={index}>{num}</Box>
     ))}
    
       
    </Container>
  )
}

export default NumberSelector

const Box=styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700px;
border-radius: 15px;
color: white;
    
`
const Container=styled.div`
  display: flex;
  max-width: 700px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: black;
  gap: 15px;
  align-items: center;
  justify-content: center;
`
