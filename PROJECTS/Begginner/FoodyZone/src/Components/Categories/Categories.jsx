import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <Container>
      <TopContainer>
      <li><Link to="/all">All</Link></li>
      <li><Link to="/all">Breakfast</Link></li>
      <li><Link to="/all">Lunch</Link></li>
      <li><Link to="/all">Dinner</Link></li>
      
      </TopContainer>
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  /* Styles for the container */
  
`;

const TopContainer = styled.ul`
  /* Styles for the top container */
  justify-content: center;
  align-items: center;
  list-style: none;
  list-style: none;
  margin-top:50px;
  display: flex;
  gap: 10px;
  font-size: 20px;
  li{
    color: red;
    transition: color 0.3s ease-in-out;
  }
  li:hover{
    color: black;
  }
`;
