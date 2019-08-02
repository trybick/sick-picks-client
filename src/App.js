import React from 'react';
import { Header } from './components/common';
import { SickPicks } from './components/SickPicks';
import './App.scss';
import GithubCorner from 'react-github-corner';

const githubCorner = (
  <GithubCorner
    href="https://github.com/trybick/sick-picks-client"
    bannerColor="#151513"
    octoColor="#fff"
    size={80}
    direction="right"
    ariaLabel="Open GitHub project"
  />
);

function App() {
  return (
    <div className="container">
      {githubCorner}
      <Header />
      <SickPicks />
    </div>
  );
}

export default App;
