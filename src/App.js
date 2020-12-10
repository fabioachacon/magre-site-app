import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Nav from './components/Nav';
import Header from './sections/Header';
import Presentation from './sections/Presentation';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
