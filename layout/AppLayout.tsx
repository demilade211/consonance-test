'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FC, ReactElement } from 'react'
import styled from 'styled-components';

const AppLayout: FC<any> = ({ children }) => {
  return (
    <Con>
      <div className='in-hero'>
        <Navbar />
        {children}
        <Footer />
      </div>

    </Con>
  )
}

const Con = styled.div`  
  width: 100%;   
  height: 100vh;  
  background: url('/images/bg1.jpg') center no-repeat;
  background-size: cover;  
  position: relative;
  &::after{
    content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
  } 
  .in-hero{ 
    position: relative; 
    width: 100%; 
    height: 100%;
    z-index: 1;  
  }
`;

export default AppLayout