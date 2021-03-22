import styled from 'styled-components';

export const ChatToggle = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid black;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  margin: 0 auto 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  display: ${props => (props.hide ? 'flex' : 'none')};

  form {
    display: flex;
    overflow: scroll;
    height: 500px;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    border: 2px solid #000;
    border-radius: 2%;
    padding: 20px;
    margin: 0 auto 20px;
  }
`;

export const SpeechBubble = styled.div`
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  width: 200px;
  height: auto;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 22px solid transparent;
    border-right-color: #fff;
    border-left: 0;
    border-top: 0;
    margin-top: -11px;
    margin-left: -22px;
  }
`;
