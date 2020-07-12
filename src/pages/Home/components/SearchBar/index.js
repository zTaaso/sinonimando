import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { StatusBar } from './styles';

import { SynonymsContext } from '../../../../context/Synonyms';

function SearchBar() {
  const history = useHistory();
  const context = useContext(SynonymsContext);

  const { wordState } = context;

  const { word } = wordState;

  const [currentWord, setCurrentWord] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (currentWord === word) return;

    history.push(`/${currentWord}`);
  }

  useEffect(() => {
    setCurrentWord(word);
  }, [word]);

  return (
    <StatusBar>
      <h1 onClick={() => history.push('/')}>Sinonimando</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(evt) => {
            setCurrentWord(evt.target.value);
          }}
          value={currentWord || ''}
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
