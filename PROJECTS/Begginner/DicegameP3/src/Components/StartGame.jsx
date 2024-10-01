import React from 'react';

import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Container>
     
        <div>
        <img src="/Images/dices.png" alt="dices" />
        </div>
        <div className='content'>
          <h1>DICEGAME</h1>
          <button onClick={toggle}>Start Game</button>
        </div>
    
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
 display: flex;
 flex-direction: row;
 max-width: 1180px;
 justify-content: center;
 justify-items: end;
 align-items: center;
 margin:0 auto;
 gap: 250px;

 .content{

  h1{
    font-size: 75px;
    font-weight: 500;
  }
  button{
  min-width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  border-radius: 25px;
  border: none;
 margin: 0 auto;
 margin-right: 0;
 margin-left: 150px;

  &:hover{
      background-color: green;
      color: black;
      border: none;
      transition: background-color 0.3s ease-in;
  }
  } 
 }
`;
