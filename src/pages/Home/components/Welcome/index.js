import React from 'react';

import img from '../../../../assets/welcome.png';

import { Content } from './styles.js';

function Welcome() {
  return (
    <Content>
      <img src={img} alt="emoji" />

      <h1>Bem vindo!</h1>

      <p>Comece procurando por um sinônimo na barra de pesquisa acima.</p>
    </Content>
  );
}

export default Welcome;
