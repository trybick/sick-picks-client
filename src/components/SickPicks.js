import React from 'react';
import { Card } from './common';
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';
import uniqid from 'uniqid';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const mappedEpisodeData = Object.values(filteredData).map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiEntries = epi[epiTitle];
    const epiDate = epiEntries[0].date;

    return <Card epiDate={epiDate} epiEntries={epiEntries} epiTitle={epiTitle} key={uniqid()} />;
  });

  const onRandomize = () => {
    let grid = document.querySelector('.grid');
    for (let i = grid.children.length; i >= 0; i--) {
      grid.appendChild(grid.children[(Math.random() * i) | 0]);
    }
  };

  return (
    <>
      <div className="random-button">
        <button onClick={onRandomize} type="button">
          Randomize Order
        </button>
      </div>
      <div className="grid">{mappedEpisodeData}</div>
    </>
  );
};
