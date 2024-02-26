'use client'

import React from 'react'
import styled from 'styled-components';

const MainSection = () => {
  return (
    <Con className='flex justify-center items-center flex-col'>
      <h1>COMING SOON</h1>
      <p>We will be here soon, click on "Notify Me" to be ready for the grand day</p>
      <WhiteButton >NOTIFY ME</WhiteButton>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;   
  height:75%; 
  padding: 30px;
  h1{
    color: var(--pure-white, #FFF);
    text-align: center;
    font-family: Roboto;
    font-size: 90px;
    font-style: normal;
    font-weight: 400; 
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom:20px;
    @media (max-width: 600px) { 
        font-size: 24px;
    }
  }
  p{
    font-family: "Dancing Script", cursive;
    color: var(--pure-white, #FFF);
    text-align: center;  
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    margin-bottom:20px;
    @media (max-width: 600px) { 
      font-size: 16px;
    }
  }
`;

const WhiteButton = styled.button`  
  width: 200px;
  padding: 12px 24px; 
  border-radius: 4px;
  border:1px solid white;
  border-radius: 4px;
  background: none;
  line-height: normal; 
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500; 
  cursor:pointer;
  outline:none;
  &:hover { 
      transition: 200ms ease-in;
  } 
`;

export default MainSection