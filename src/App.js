import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Nav from './components/Nav';
import Header from './sections/Header';
import Presentation from './sections/Presentation';
import Action from './sections/Action';
import Articles from './sections/Articles';
import Table from './sections/Contents';
import Contents from './sections/Contents';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Presentation />
      <Action />
      {/* <Articles /> */}
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
