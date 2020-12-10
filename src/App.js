import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Nav from './components/Nav';
import Header from './sections/Header';
import Presentation from './sections/Presentation';
import Action from './sections/Action';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Presentation />
      <Action />
    </div>
  );
}

export default App;
