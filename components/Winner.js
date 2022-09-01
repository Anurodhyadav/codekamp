import styled from "styled-components";
import Image from "next/image";

const Winner = ({ closeHandler }) => {
  return (
    <WinnerContainer>
      <Image src={"/asset/congratulations.svg"} height={280} width={250} />
      <Points>+200 Points</Points>
      <h1>CONGRATULATIONS</h1>
      <p>
        You emerged victorious. You may now battle more warriors and conquer the
        the world of coding.
      </p>
      <ButtonContainer>
        <button className="primary-btn">Spectate your opponent</button>
        <Button onClick={() => router.push("/matchpage")}>
          Search for a new warrior
        </Button>
      </ButtonContainer>
      <CloseBtn onClick={closeHandler}>X</CloseBtn>
    </WinnerContainer>
  );
};

export default Winner;

const WinnerContainer = styled.div`
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
const Points = styled.text`
  color: #7ef535;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 424px;
  height: 53px;
  border: 2px solid #ccccff;
  border-radius: 5px;
  background-color: var(--dark);
  margin-left: 20px;
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
