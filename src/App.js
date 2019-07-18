import React from 'react';
import { scrapedData } from './scrapedData'

function App() {
  const mappedItems = Object.keys(scrapedData.map(item => {

    if (Object.entries(item).length !== 0) {
      const episodes = Object.values(item);
      // console.log(episodes)
       return episodes[0].map(entry => {
        console.log('entry', entry.textContent)
        console.log('hyperlink', entry.hyperlink)
        return <div>
          {entry.textContent}
        </div>
      })
    }


  }))
  return (
    <div>
      'test'
      {mappedItems}
    </div>
  );
}

export default App;
