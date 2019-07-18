import React from 'react';
import { scrapedData } from './scrapedData'

function App() {
  const mappedItems = Object.keys(scrapedData.map(item => {
    const episodes = Object.values(item);
    console.log(episodes)

    episodes[0][0] && console.log('double', episodes[0].map(test => {
      console.log(test.textContent)
    }))

  }))
  return (
    <div>
      'test'
      {mappedItems}
    </div>
  );
}

export default App;
