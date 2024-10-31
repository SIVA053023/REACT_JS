import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = () => {  
 const NumberArray=[1,2,3,4,5,6]
const [selectedNumber,setSelectedNumber]=useState();
 console.log(selectedNumber);
 
 
  return (

    <Container>
    <Num>
    {NumberArray.map((num,index)=>(
      <Box key={index} onClick={()=>setSelectedNumber (num)}
      isSelected={num===selectedNumber}
      >{num}</Box>
     ))}
      </Num> 
      <p>Select Number</p>
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
background-color: ${(props)=> (props.isSelected ? "black" : "white")};
color: ${(props)=> (props.isSelected ? "white" : "black")};

   
`
const Num=styled.div`
  display: flex;
  gap: 15px;
`

const Container=styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 15px;
  align-items: end;
  justify-content: center;

  p{
    font-size: 24px;
  }
  

`
