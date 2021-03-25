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
  margin: 0 20px;

  form {
    display: flex;
    overflow: auto;
    height: 400px;
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
  width: auto;
  height: auto;
  font-size: 14px;
  padding: 10px;
  margin: 10px 10px 10px 30px;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    border: 10px solid transparent;
    border-right-color: #fff;
    border-left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
`;

export const SpeechWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const SpeechBot = styled.div`
  font-size: 24px;
`;

export const SaveBtn = styled.button`
  background: #fff;
  border: unset;
  border-radius: 5px;
  padding: 5px 50px;
  font-size: 18px;
  margin: 30px 10px 10px;
  box-shadow: 5px 5px rgba(253, 187, 45, 1);

  :hover {
    background: rgba(253, 187, 45, 1);
    box-shadow: 5px 5px #fff;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  width: auto;
  height: auto;
  font-size: 14px;
  padding: 10px;
  margin: 10px 30px 10px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row;

  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    border: 10px solid transparent;
    border-left-color: #fff;
    border-right: 0;
    margin-top: -10px;
    margin-right: -10px;
  }

  input {
    padding: 10px 5px;
    border: ${props => (props.status ? '1px solid #000' : '1px solid red')};
    color: ${props => (props.status ? '1px solid #000' : '1px solid red')};
    border-radius: 3px;
    width: 100%;
  }
`;

export const InputStatus = styled.div`
  border: 12px solid transparent;
  border-left-color: ${props => (props.status ? 'green' : 'red')};
  border-right: 0;
  margin: 5px 20px 0;
`;

export const InputErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: red;
  font-size: 12px;
`;

export const InputErrorWrapperStars = styled.div`
  label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    width: 100%;
  }

  input {
    /* position: absolute;
    top: 0;
    clip: rect(1px, 1px, 1px, 1px);
    left: 0; */
    width: 10px;
    height: 10px;
    padding: 0 10px;
  }

  input:checked ~ svg {
    fill: yellow;
  }
`;

export const AutoCompleteOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  font-size: 12px;
  width: 100%;
  height: 100%;
`;

export const CityButton = styled.button`
  border: unset;
  background: transparent;
  padding: 10px;
  width: 100%;
  text-align: left;

  :hover {
    background: lightgray;
  }
`;
