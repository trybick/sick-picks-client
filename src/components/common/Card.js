/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Card.scss'

export const Card = props => {
  const { epiContent, epiDate, epiTitle } = props;

  const getOwnerClass = owner => {
    let ownerClass = 'other'
    if (owner.includes('Wes')) {
      ownerClass = 'wes'
    } else if (owner.includes('Scott')) {
      ownerClass = 'scott'
    }
    return ownerClass;
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <h4>{epiTitle}</h4>
          <p>{epiDate}</p>
        </div>
        {epiContent.map(entry => (
          <div className="card-entry">
            {entry.owner
              && <span className={getOwnerClass(entry.owner)}>{entry.owner} :{' '}</span>}
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
              {entry.text}
            </a>
            <br />
          </div>
        )) }
      </div>
    </div>
  )
};
