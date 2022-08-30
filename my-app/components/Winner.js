import styled from "styled-components";
import Image from "next/image";

const Winner = ({ setGameWon }) => {
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
        <button onClick={() => setGameWon(false)} className="primary-btn">
          Spectate your opponent
        </button>
        <Button onClick={() => router.push("/matchpage")}>
          Search for a new warrior
        </Button>
      </ButtonContainer>
    </WinnerContainer>
  );
};

export default Winner;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
