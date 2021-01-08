import React, {useState} from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './sections/Header';
import Articles from './sections/Articles';
import Contents from './sections/Contents';
import Footer from './sections/Footer';
import Flask from './sections/Flask';
import Action from './sections/Action';
import NavBar from './components/NavBar';
import Compound from './sections/Compound';
import Benefits from './sections/Benefits';
import Details from './components/Details';

import styled from 'styled-components';


function App() {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Details setShowDetail={setShowDetail} showDetail={showDetail} />
      <NavBar />
      <Header />
      <Compound setShowDetail={setShowDetail}/>
      <Action />
      <Flask />
      <Benefits />
      {/* <Articles /> */}
      {/* <SideEffects /> */}
      <Contents />
      <Footer />
    </div>
  );
}


export default App;
