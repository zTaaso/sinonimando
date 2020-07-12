import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinkit from 'react-spinkit';

import { Content, SynonymItem, Loading } from './styles.js';

import { SynonymsContext } from '../../../../context/Synonyms';

function SynonymsContent({ match }) {
  const routeWord = match.params.word;

  const history = useHistory();
  const context = useContext(SynonymsContext);

  const { synonyms = [], wordState, loading = false } = context;
  const { word, setWord } = wordState;

  function handleSynonymClick(word) {
    let formatedWord = word.replace(/(?:\.|,)/, '');

    history.push(`/${formatedWord}`);
  }

  useEffect(() => {
    setWord(routeWord);
  }, [history, routeWord, setWord, word]);

  return (
    <Content>
      {loading ? (
        <Loading>
          {loading && <Spinkit name="pacman" color="yellow" fadeIn="none" />}
        </Loading>
      ) : (
        <>
          <h1>
            Sinônimos de <span>{word}</span>
          </h1>
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
        </>
      )}
    </Content>
  );
}

export default SynonymsContent;
