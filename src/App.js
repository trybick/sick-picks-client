import React from 'react';
import { scrapedData } from './scrapedData';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);

  const mappedItems = epiData.map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];
    console.log('data', epi);

    return (
      <div>
        {epiTitle}
        {epiContent.map(sickPick => (
          <div>
            <a href={sickPick.hyperlink} target="_blank" rel="noopener noreferrer">
              {sickPick.textContent}
            </a>

            {/* <SickPicks data={sickPicks} /> */}
          </div>
        ))}
        <br />
      </div>
    );
  });

  return <div>{mappedItems}</div>;
}

export default App;
