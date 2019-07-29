import React from 'react';
import { Card } from './common'
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const mappedEpisodeData = Object.values(filteredData).map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiEntries = epi[epiTitle];
    const epiDate = epiEntries[0].date;

    return (
      <Card
        epiDate={epiDate}
        epiEntries={epiEntries}
        epiTitle={epiTitle}
      />
    );
  });

  return (
    <div className="grid">
      {mappedEpisodeData}
    </div>
  );
};
