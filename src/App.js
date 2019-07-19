import React from 'react';
import { scrapedData } from './scrapedData';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const dataValues = Object.values(filteredData);
  console.log('dataValues:', dataValues);

  const res = dataValues.map(episode => {
    const episodeTitle = Object.keys(episode)[0];
    const data = episode[episodeTitle];
    console.log('episode', episode[Object.keys(episode)[0]]);
    return data;
  });
  console.log('res', res);

  return (
    <div>
      'test'
      {/* {mappedItems} */}
    </div>
  );
}

export default App;
