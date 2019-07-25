import React from 'react';
import { Header } from './components/common';
import { SickPicks } from './components/SickPicks';
import './App.scss'

function App() {
  return (
    <div className="container">
      <Header />
      <SickPicks />
    </div>
  );
}

export default App;
