import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const StatusBar = styled.div`
  background: #45046a;
  width: 100%;
  padding: 25px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #b5076b;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    border-bottom: 1px solid #b5076b;
  }

  form {
    width: 50%;
    margin-top: 25px;

    display: flex;
    flex-direction: row;
  }

  form input {
    width: 100%;
    height: 32px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(#b5076b, ${darken(0.05, '#b5076b')});

    color: #fff;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    transition: 0.3s;

    &:hover,
    &:focus {
      padding: 18px 15px;
    }

    &::placeholder {
      color: #fff;
      opacity: 0.4;
    }
  }

  form button {
    background: #b5076b;
    border-radius: 7px;
    border: none;
    padding: 6px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    cursor: pointer;

    position: relative;
    left: 0;
    bottom: 0;

    &:hover {
      padding: 9px;
      left: 3px;
      bottom: 3px;
      background: ${darken(0.03, '#b5076b')};
    }
  }
`;
