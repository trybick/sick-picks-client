import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { scrapedData } from './scrapedData';
import './styles/App.scss';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);

  const mappedItems = epiData.map((epi, i) => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];
    console.log('epiContent:', i)
    return (
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
    );
  });

  return <Container className="wrapper">{mappedItems}</Container>;
}

export default App;
