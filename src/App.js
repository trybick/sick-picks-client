import React from 'react';
import { Card } from 'semantic-ui-react';
import { scrapedData } from './scrapedData';
import './styles/App.scss';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);

  const mappedItems = epiData.map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];
    console.log('data', epi);
    return (
      <Card>
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
    );

  });

  return <div className="wrapper">{mappedItems}</div>;
}

export default App;
