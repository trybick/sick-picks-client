import React from 'react';
import { Card } from './common/Card'
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);

  const mappedEpisodeData = epiData.map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];
    
    return (
      <div>
        <Card
          epiContent={epiContent}
          epiTitle={epiTitle}
        />
      </div>
    );
  });

  return (
    <div className="grid">
      {/* <div className="myCard">
        <div className="myCard-content">
          <h4>Episode 101</h4>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Scott: Figma
            Wes: CalDigit TS3 Plus Thunderbolt 3 Dock
            Jason: Local by Flywheel
          </a>
          <br />
        </div>
      </div> */}

      {mappedEpisodeData}
    </div>
  );
};
