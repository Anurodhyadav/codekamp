import styled from "styled-components";
import Loser from "./loser";
import Winner from "./Winner";

const Popup = ({ setGameWon }) => {
  return (
    <Container>
      <Winner setGameWon={setGameWon}></Winner>
      <CloseBtn onClick={() => setGameWon(false)}>X</CloseBtn>
    </Container>
  );
};

export default Popup;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 12%;
  left: 15%;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-radius: 8px;
  padding: 0 10px;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 50%);
  width: 70%;
  height: 85%;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  padding: 4px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
`;
