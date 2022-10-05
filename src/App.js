import React from 'react';
import Wrapper from './pages/Wrapper';

import TopBanner from './components/TopBanner';
import TopHeader from './components/TopHeader';



import './App.css';

function App() {
  return (
    <Wrapper>
      <TopBanner />
      <TopHeader />
    </Wrapper>
  );
}

export default App;
