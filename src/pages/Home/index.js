import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Content, SynonymItem } from './styles.js';

import SearchBar from '../../components/SearchBar';

function Home({ match }) {
  const history = useHistory();
  const routeWord = match.params.word;

  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState(routeWord);

  async function getSynonyms(word) {
    // const response = await (
    //   await fetch(
    //     `http://sinonimosapi.netlify.com/.netlify/functions/api/?q=${word}`
    //   ).catch((err) => console.log({ err }))
    // ).json();

    const { data: response } = await axios(
      `http://sinonimosapi.netlify.com/.netlify/functions/api/?q=${word.trim()}`
    );
    const synonyms = Object.entries(response).map((synonym) => ({
      sort: synonym[0],
      synonyms: synonym[1].map((word, index, arr) => ({
        name: index === arr.length - 1 ? word.concat('.') : word.concat(','),
        isMultiple: word.includes(' '),
      })),
    }));
    setSynonyms(synonyms);
  }

  function handleSynonymClick(word) {
    let formatedWord = word.replace(/(?:\.|,)/, '');

    history.push(`/${formatedWord}`);
    setWord(formatedWord);
    getSynonyms(formatedWord);
  }

  useEffect(() => {
    getSynonyms(routeWord);
    setWord(routeWord);
  }, [routeWord]);

  return (
    <Container>
      <SearchBar
        onSearch={getSynonyms}
        onWordChange={() => {}}
        wordProp={word}
      />

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
    </Container>
  );
}

export default Home;
