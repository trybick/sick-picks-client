/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import './Card.scss'

export const Card = props => {
  const { epiContent, epiDate, epiTitle } = props;

  return (
    <div className="card">
      <div>
        <h4>{epiTitle}</h4>
        <p>{epiDate}</p>
        {epiContent.map(entry => (
          <div>
            {entry.owner}:{' '}
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
