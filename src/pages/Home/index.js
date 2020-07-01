import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles.js';

import SearchBar from '../../components/SearchBar';
import NotFound from '../../components/NotFound';

import SynonymsContent from './components/SynonymsContent';

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
    setLoading(false);
    setDidFind(!!synonyms[0]);
  }, []);

  useEffect(() => {
    getSynonyms(routeWord);
    setWord(routeWord);
  }, [routeWord, getSynonyms]);

  useEffect(() => {}, [synonyms]);

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

      {notFound ? (
        <NotFound />
      ) : (
        <SynonymsContent
          synonyms={synonyms}
          didFind={didFind}
          word={word}
          loading={loading}
        />
      )}
    </Container>
  );
}

export default Home;
