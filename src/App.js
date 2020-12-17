import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Nav from './components/Nav';
import Header from './sections/Header';
import Presentation from './sections/Presentation';
import Articles from './sections/Articles';
import Table from './sections/Contents';
import Contents from './sections/Contents';
import Footer from './sections/Footer';
import SideEffects from './sections/SideEffects';
import Flask from './sections/Flask';
import Action from './sections/Action';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Flask />
      <Action />
      <Articles />
      <SideEffects />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
