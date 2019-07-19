import React from 'react';
import { scrapedData } from './scrapedData';

function App() {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);

  const mappedItems = Object.keys(
    filteredData.map(item => {
      const episodes = Object.values(item);

      const step2 = episodes[0].map(x => {
        console.log('text', x.textContent);
        console.log('hyperlink', x.hyperlink);
        return <div>{x.textContent}</div>;
      });
    }),
  );
  return (
    <div>
      'test'
      {mappedItems}
    </div>
  );
}

export default App;
