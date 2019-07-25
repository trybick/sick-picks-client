import React from 'react';
import './Header.scss';

export const Header = () => (
  <div className="hero">
    <div className="title-wrapper">
      <h1 className="main-title">
        Sick Picks
        <br />
        <p className="subtitle">
          from the podcast
          {'  '}
          <a href="https://syntax.fm" target="_blank" rel="noopener noreferrer">syntax.fm</a>
        </p>
      </h1>
    </div>
  </div>
);
