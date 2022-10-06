import React from 'react';
import Wrapper from './pages/Wrapper';

import TopBanner from './components/TopBanner';
import TopHeader from './components/TopHeader';
import LogoHeader from './components/LogoHeader';
import NavHeader from './components/NavHeader';
import MainSlide from './components/MainSlide';

import './App.css';




function App() {
  return (
    <Wrapper>
      <TopBanner />
      <TopHeader />
      <LogoHeader />
      <NavHeader />
      <MainSlide />
    </Wrapper>
  );
}

export default App;
