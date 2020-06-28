import React from 'react';

import { Content } from './styles';
import emoji from '../../assets/notFound.png';

function NotFound() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <Content>
      {randomNumber >= 5 ? (
        <img src={emoji} alt="doubtful emoji" />
      ) : (
        <iframe
          src="https://giphy.com/embed/a5viI92PAF89q"
          width="480"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="doubtful batman gif"
        ></iframe>
      )}

      <h2>
        Sinônimo não encontrado. <br /> Tente novamente com uma palavra
        semelhante.
      </h2>
    </Content>
  );
}

export default NotFound;
