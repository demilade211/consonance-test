'use client'

import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Con className='flex justify-center items-center'>
      <p>Krib</p>
    </Con>
  )
}
const Con = styled.div`  
  width: 100%;   
  height: 70px;   
  p{
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal; 
    color: white;
    font-size:50px;
  }
`;

export default Navbar