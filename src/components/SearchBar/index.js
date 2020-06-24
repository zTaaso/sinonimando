import React from 'react';
import { MdSearch } from 'react-icons/md';

import { StatusBar } from './styles';

function SearchBar() {
  return (
    <StatusBar>
      <h1>Sinonimando</h1>

      <form action="">
        <input type="text" placeholder="Procure por um sinônimo" />
        <button type="button">
          <MdSearch size={20} color="#FFF" />
        </button>
      </form>
    </StatusBar>
  );
}

export default SearchBar;
