import React from 'react';
import { Container } from 'semantic-ui-react';
import { Header } from './components/common';
import { SickPicks } from './components/SickPicks';

function App() {
  return (
    <Container>
      <Header />
      <SickPicks />
    </Container>
  );
}

export default App;
