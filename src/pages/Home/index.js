import React from 'react';

import { Container } from './styles.js';

import SearchBar from './components/SearchBar';

import Router from './router';

function Home() {
  return (
    <Container>
      <SearchBar />
      <Router />
    </Container>
  );
}

export default Home;
