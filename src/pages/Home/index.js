import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Spinkit from 'react-spinkit';

import { Container, Content, SynonymItem } from './styles.js';

import SearchBar from '../../components/SearchBar';
import NotFound from '../../components/NotFound';

import api from '../../services/api';

function Home({ match, notFound = false }) {
  const history = useHistory();
  const routeWord = match.params.word;

  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState(routeWord);
  const [didFind, setDidFind] = useState(true);
  const [loading, setLoading] = useState(false);

  const getSynonyms = useCallback(async (word = '') => {
    setLoading(true);
    const { data } = await api({ params: { q: word.trim() } });

    const synonyms = Object.entries(data).map((synonym) => ({
      sort: synonym[0],
      synonyms: synonym[1].map((word, index, arr) => ({
        name: index === arr.length - 1 ? word.concat('.') : word.concat(','),
        isMultiple: word.includes(' '),
      })),
    }));

    setSynonyms(synonyms);
  }, []);

  function handleSynonymClick(word) {
    let formatedWord = word.replace(/(?:\.|,)/, '');

    history.push(`/${formatedWord}`);
  }

  useEffect(() => {
    getSynonyms(routeWord);
    setWord(routeWord);
  }, [routeWord, getSynonyms]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    setDidFind(!!synonyms[0]);
    setLoading(false);
  }, [synonyms]);

  useEffect(() => {
    if (!didFind) {
      history.push('/notFound');
    }
  }, [didFind, history]);

  return (
    <Container>
      <SearchBar
        onSearch={getSynonyms}
        onWordChange={() => {}}
        wordProp={word}
      />
      {loading && <Spinkit name="pacman" color="yellow" fadeIn="none" />}

      {didFind && !!routeWord && (
        <Content>
          <ul>
            {synonyms.map((synonymItem) => (
              <SynonymItem key={synonymItem.sort}>
                <h2>{synonymItem.sort}</h2>
                <div>
                  <ul>
                    {synonymItem.synonyms.map((synonym) => (
                      <li key={synonym.name}>
                        <button
                          className={synonym.isMultiple ? 'multiple' : ''}
                          onClick={() =>
                            synonym.isMultiple
                              ? {}
                              : handleSynonymClick(synonym.name)
                          }
                        >
                          {synonym.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </SynonymItem>
            ))}
          </ul>
        </Content>
      )}

      {}

      {notFound && <NotFound />}
    </Container>
  );
}

export default Home;
