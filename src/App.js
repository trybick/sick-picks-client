import React from 'react';
import { scrapedData } from './scrapedData';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const episodes = Object.values(filteredData);
  console.log('episodes:', episodes);

  const res = episodes.map(episode => {
    const episodeTitle = Object.keys(episode)[0];
    const data = episode[episodeTitle];
    console.log('episode', episode[Object.keys(episode)[0]]);
    return <div>{episodeTitle}</div>;
  });
  console.log('res', res);

  return (
    <div>
      'test'
      {res}
    </div>
  );
}

export default App;
