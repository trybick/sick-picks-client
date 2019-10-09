/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Card.scss';
import uniqid from 'uniqid';

export const Card = props => {
  const { epiEntries, epiDate, epiTitle } = props;

  const getOwnerClass = owner => {
    let ownerClass = 'other';
    if (owner.includes('Wes')) {
      ownerClass = 'wes';
    } else if (owner.includes('Scott')) {
      ownerClass = 'scott';
    }
    return ownerClass;
  };

  const getEntries = () => {
    return epiEntries.map(entry => (
      <div className={`card-entry ${getOwnerClass(entry.owner).toLowerCase()}`} key={uniqid()}>
        {entry.owner && <span className={getOwnerClass(entry.owner)}>{entry.owner}: </span>}
        <a href={entry.link} target="_blank" rel="noopener noreferrer">
          {entry.text}
        </a>
        <br />
      </div>
    ))
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <p className="episode-date"><small>{epiDate}</small></p>
        <h4 className="episode-title">{epiTitle}</h4>
        <div className="entries-container">
          {getEntries()}
        </div>
      </div>
    </div>
  );
};
