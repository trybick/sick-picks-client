import React from 'react';
import { Card } from 'semantic-ui-react';
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
          // <div>
          //   <a href={sickPick.hyperlink} target="_blank" rel="noopener noreferrer">
          //     {sickPick.textContent}
          //   </a>
          // </div>
          <Card>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                22 Friends
            </Card.Content>
          </Card>
        ))}
        <br />
      </div>
    );
  });

  return <div>{mappedItems}</div>;
}

export default App;
