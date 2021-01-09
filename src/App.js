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


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Header />
      <Compound/>
      <Action />
      <Flask />
      <Benefits />
      {/* <Articles /> */}
      <Contents />
      <Footer />
    </div>
  );
}


export default App;
