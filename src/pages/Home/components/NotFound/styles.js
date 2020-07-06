import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;

  width: 50%;

  img {
    width: 250px;
    height: 200px;
  }

  iframe {
    height: 250px;
  }

  h2 {
    padding: 0 50px;
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
    color: rgba(255, 0, 0, 0.8);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`;
