import React, { useEffect, useState } from 'react';

import { Container, Content } from './styles.js';

import SearchBar from '../../components/SearchBar';

function Home() {
  useEffect(() => {
    async function sla() {
      const response = await (
        await fetch(
          'http://sinonimosapi.netlify.com/.netlify/functions/api/?q=oi'
        )
      ).json();
      console.log(response);
    }
    sla();
  }, []);

  return (
    <Container>
      <SearchBar />

      <Content>
        <ul>
          <li>
            <h2>Tipo</h2>
            <div>
              <ul>
                <li>sinonimo</li>
                <li>sinonimo</li>
                <li>sinonimo</li>
              </ul>
            </div>
          </li>
        </ul>
      </Content>
    </Container>
  );
}

export default Home;
