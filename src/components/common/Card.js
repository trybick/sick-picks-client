/* eslint-disable react/prop-types */
import React from 'react';
import './Card.scss'

export const Card = props => {
  const { epiContent, epiTitle } = props;

  return (
    <div className="myCard">
      <div className="myCard-content">
        <h4>{epiTitle}</h4>
        {epiContent.map(entry => (
          <div>
            <a href={entry.hyperlink} target="_blank" rel="noopener noreferrer">
              {entry.textContent}
            </a>
            <br />
          </div>
        )) }
      </div>
    </div>
  )
};
