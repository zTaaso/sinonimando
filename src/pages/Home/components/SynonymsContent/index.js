import React from 'react';
import { useHistory } from 'react-router-dom';
import Spinkit from 'react-spinkit';

import { Content, SynonymItem, Loading } from './styles.js';

function SynonymsContent({ synonyms = [], word = '', loading = false }) {
  const history = useHistory();

  function handleSynonymClick(word) {
    let formatedWord = word.replace(/(?:\.|,)/, '');

    history.push(`/${formatedWord}`);
  }

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
