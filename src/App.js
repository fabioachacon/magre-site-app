import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './sections/Header';
import Articles from './sections/Articles';
import Contents from './sections/Contents';
import Footer from './sections/Footer';
import SideEffects from './sections/SideEffects';
import Flask from './sections/Flask';
import Action from './sections/Action';
import Navbar from './components/Navbar';
import NavBarResp from './components/NavBarResp';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBarResp />
      {/* <Navbar /> */}
      <Header />
      <Flask />
      <Action />
      <Articles />
      {/* <SideEffects /> */}
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
