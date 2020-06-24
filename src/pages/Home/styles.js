import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: radial-gradient(#5c2a9d, #45046a);
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 5px 0 50px;
`;

export const Content = styled.div`
  min-height: 100px;
  width: 90%;
  padding: 20px 30px;
  border-radius: 8px;
  background: #b5076b;
  margin-top: 50px;
`;

export const SynonymItem = styled.li`
  list-style: none;

  & + & {
    margin-top: 15px;
  }

  h2 {
    color: #fff;
    margin-bottom: 6px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  div {
    margin-left: 15px;
    padding: 5px 20px;
    display: inline-block;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;

    ul {
      display: flex;
      flex-direction: row;
      max-width: 100%;
      overflow-wrap: break-word;
      flex-wrap: wrap;
    }

    ul li {
      margin-right: 6px;
      list-style: none;
      /* min-width: 80px; */

      a {
        color: #fff;
        font-size: 18px;
        text-decoration: none;
        border-bottom: 1px dotted #ff0;
        line-height: 1.5;

        cursor: pointer;
      }
    }
  }
`;
