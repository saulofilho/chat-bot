import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  padding: 0 30px 50px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;
