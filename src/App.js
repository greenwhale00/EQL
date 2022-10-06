import React from 'react';
import Wrapper from './pages/Wrapper';

import TopBanner from './components/TopBanner';
import TopHeader from './components/TopHeader';



import './App.css';
import LogoHeader from './components/LogoHeader';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <Wrapper>
      <TopBanner />
      <TopHeader />
      <LogoHeader />
      <NavHeader />
    </Wrapper>
  );
}

export default App;
