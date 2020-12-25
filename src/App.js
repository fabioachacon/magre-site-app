import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './sections/Header';
import Articles from './sections/Articles';
import Contents from './sections/Contents';
import Footer from './sections/Footer';
import Flask from './sections/Flask';
import Action from './sections/Action';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />

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
