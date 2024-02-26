'use client'

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Con className='flex justify-center items-center flex-col'>
      <p>Website by Afolabi Ogunbanwo. All Rights Reserved</p>
      <div className='soc flex my-3 items-center'>
        <div><img className="mr-5 cursor-pointer" src="/images/fb.svg" alt="img" /></div>
        <div><img className="mr-5 cursor-pointer" src="/images/insta.svg" alt="img" /> </div>
        <div><img className="mr-5 cursor-pointer" src="/images/twit.svg" alt="img" /> </div>
      </div>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;    
  p{
    font-family: "Dancing Script", cursive;
    color: var(--pure-white, #FFF);
    text-align: center;  
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
`;

export default Footer