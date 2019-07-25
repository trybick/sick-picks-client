/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Card.scss'

export const Card = props => {
  const { epiContent, epiDate, epiTitle } = props;

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h4>{epiTitle}</h4>
          <p>{epiDate}</p>
        </div>
        {epiContent.map(entry => (
          <div>
            {entry.owner && `${entry.owner} :${' '}`}
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
