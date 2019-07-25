/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.scss'

export const Card = props => {
  const { epiContent, epiDate, epiTitle } = props;
  // owner, link, text, date

  return (
    <div className="card">
      <div>
        <h4>{epiTitle}</h4>
        <p>{epiDate}</p>
        {epiContent.map(entry => (
          <div>
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
              {entry.owner}: {entry.text}
            </a>
            <br />
          </div>
        )) }
      </div>
    </div>
  )
};
