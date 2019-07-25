import React from 'react';
import { Card } from 'semantic-ui-react';
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);

  const mappedEpisodeData = epiData.map((epi, i) => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];

    return (
      <div>
        <Card centered raised>
          <Card.Content>
            <Card.Header>{epiTitle}</Card.Header>
            {epiContent.map(sickPick => (
              <div>
                <a href={sickPick.hyperlink} target="_blank" rel="noopener noreferrer">
                  {sickPick.textContent}
                </a>
                <br />
              </div>
            ))}
          </Card.Content>
        </Card>
      </div>
    );
  });

  return (
    <div className="grid">
      <div className="myCard">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Scott: Figma
            Wes: CalDigit TS3 Plus Thunderbolt 3 Dock
            Jason: Local by Flywheel
        </a>
        <br />
      </div>

      {mappedEpisodeData}
    </div>
  );
};
