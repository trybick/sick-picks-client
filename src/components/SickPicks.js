import React from 'react';
import { Card } from './common';
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const mappedEpisodeData = Object.values(filteredData).map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiEntries = epi[epiTitle];
    const epiDate = epiEntries[0].date;

    return <Card epiDate={epiDate} epiEntries={epiEntries} epiTitle={epiTitle} />;
  });

  const onRandomize = () => {
    let ul = document.querySelector('.grid');
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  };

  return (
    <>
      <button onClick={onRandomize} type="button">
        Randomize
      </button>
      <div className="grid">{mappedEpisodeData}</div>
    </>
  );
};
