import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  background: radial-gradient(#5c2a9d, #45046a);
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 5px 0 0px;
`;

export const Content = styled.div`
  min-height: 100%;
  width: 90%;
  padding: 20px 30px 30px;
  border-radius: 8px;
  background: #b5076b;
  margin-top: 50px;
`;

export const SynonymItem = styled.li`
  list-style: none;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.195);

  &:last-child {
    border-bottom: none;
  }

  & + & {
    margin-top: 15px;
  }

  h2 {
    color: #fff;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  div {
    margin-left: 15px;
    padding: 0 20px;
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

      button {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.85);
        font-size: 20px;
        text-decoration: none;
        border-bottom: 1px dotted rgba(255, 255, 255, 0.85);

        line-height: 1.7;

        cursor: pointer;

        &:hover {
          color: #3aa5dc;
          border-bottom: 1px solid rgba(255, 255, 255, 0.85);
        }

        &.multiple {
          border-bottom: none;
          cursor: not-allowed;
        }

        &.multiple:hover {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }
  }
`;
