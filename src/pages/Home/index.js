import React, { useEffect, useState } from 'react';

import { Container, Content, SynonymItem } from './styles.js';

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
          <SynonymItem>
            <h2>Tipo</h2>
            <div>
              <ul>
                <li>
                  <a>sinonimo,</a>
                </li>
                <li>
                  <a>sinonimo,</a>
                </li>
              </ul>
            </div>
          </SynonymItem>
        </ul>
      </Content>
    </Container>
  );
}

export default Home;
