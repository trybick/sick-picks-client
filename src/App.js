import React from 'react';
// import { Container } from 'semantic-ui-react';
import { Header } from './components/common';
import { SickPicks } from './components/SickPicks';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <SickPicks />
    </div>
  );
}

export default App;
