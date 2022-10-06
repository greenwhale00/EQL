import React from 'react';
import Wrapper from './pages/Wrapper';
import './App.css';
import TopBanner from './components/TopBanner';
import TopHeader from './components/TopHeader';
import LogoHeader from './components/LogoHeader';
import NavHeader from './components/NavHeader';
import MainSlide from './components/MainSlide';
import MainContent from './components/MainContent';
import CategoryList from './components/CategoryList';
import ContentSlide from './components/ContentSlide';
import SubContent from './components/SubContent';
import BigCate from './components/BigCate';




function App() {
  return (
    <Wrapper>
      <TopBanner />
      <TopHeader />
      <LogoHeader />
      <NavHeader />
      <MainSlide />
      <MainContent />
      <CategoryList />
      <ContentSlide />
      <SubContent />
      <BigCate />
    </Wrapper>
  );
}

export default App;
