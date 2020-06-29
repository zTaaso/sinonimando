import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { StatusBar } from './styles';

function SearchBar({ onSearch, onWordChange, wordProp = '' }) {
  const history = useHistory();
  const [word, setWord] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // onSearch(word);
    history.push(`/${word}`);
  }

  useEffect(() => {
    setWord(wordProp);
  }, [wordProp]);

  return (
    <StatusBar>
      <h1>Sinonimando</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(evt) => {
            onWordChange(evt.target.value);
            setWord(evt.target.value);
          }}
          value={word}
          placeholder="Procure por um sinônimo"
        />
        <button type="submit">
          <MdSearch size={20} color="#FFF" />
        </button>
      </form>
    </StatusBar>
  );
}

export default SearchBar;
