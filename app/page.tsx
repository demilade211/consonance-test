'use client'

import AppLayout from '@/layout/AppLayout';
import styled from 'styled-components';
import MainSection from './subComponents/MainSection';

export default function Home() {
  return (
    <Con> 
      <AppLayout> 
        <MainSection/> 
      </AppLayout>
    </Con>
  );
}

const Con = styled.div`  
  width: 100%;  
`;
