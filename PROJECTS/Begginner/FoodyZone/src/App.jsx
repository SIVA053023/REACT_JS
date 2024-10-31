import React from 'react'
import styled from 'styled-components'

const App = () => {
  return (
    <MainContainer>
      <div className="TopContainer">
      <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
        <input type="text" name="" id="" placeholder='search foood'/>
        </div>
      </div>
      <h1>App component</h1>
    </MainContainer>
   
  )
}

export default App

const MainContainer=styled.div`
background-color: balck;
  
`