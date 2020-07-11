import React, { useState, useCallback, createContext, useEffect } from 'react';

import api from '../services/api.js';
import { useHistory } from 'react-router-dom';

export const SynonymsContext = createContext();

export default function SynonymsProvider({ children }) {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState('');

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
    if (word === 'notFound' || !word) return;

    getSynonyms(word);
    setWord(word);
  }, [getSynonyms, word, setWord]);

  useEffect(() => {
    if (word === 'notFound' || !word) return;

    if (!synonyms[0]) {
      history.push('/notFound');
    }

    /* eslint-disable */
  }, [synonyms]);
  /* eslint-enable */

  const state = {
    getSynonyms,
    synonyms,
    loading,
    wordState: { word, setWord },
  };

  return (
    <SynonymsContext.Provider value={state}>
      {children}
    </SynonymsContext.Provider>
  );
}
