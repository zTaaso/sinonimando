import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles.js';

import SearchBar from './components/SearchBar';

import NotFound from './components/NotFound';
import SynonymsContent from './components/SynonymsContent';
import Welcome from './components/Welcome';

import api from '../../services/api';

function Home({ match, notFound = false, isHome }) {
  const history = useHistory();
  const routeWord = match.params.word;
  const { url } = match;

  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState(routeWord);
  const [loading, setLoading] = useState(false);
  // const [isHome, setIsHome] = useState(url === '/');

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
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!synonyms[0]) {
      history.push('/notFound');
    } else {
      // setIsHome(false);
    }
  }, [history, synonyms]);

  useEffect(() => {
    getSynonyms(routeWord);
    setWord(routeWord);
  }, [routeWord, getSynonyms]);

  return (
    <Container>
      <SearchBar
        onSearch={getSynonyms}
        onWordChange={() => {}}
        wordProp={word}
        routeWord={routeWord}
      />

      {isHome ? (
        <Welcome />
      ) : notFound ? (
        <NotFound />
      ) : (
        <SynonymsContent synonyms={synonyms} word={word} loading={loading} />
      )}
    </Container>
  );
}

export default Home;
