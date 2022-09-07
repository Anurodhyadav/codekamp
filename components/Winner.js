import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Winner = () => {
  const router = useRouter();

  return (
    <ContainerFilter>
      <WinnerContainer>
        <Confetti className="bg-confetti-animated">
          <WinnerImageContainer>
            <Image
              src={"/asset/congratulations.svg"}
              height={200}
              width={200}
            />
          </WinnerImageContainer>
          <Points>+200 Points</Points>
          <h1>CONGRATULATIONS</h1>
          <p>
            You emerged victorious. You may now battle more warriors and conquer
            the the world of coding.
          </p>
          <ButtonContainer>
            <button
              className="primary-btn"
              onClick={() => router.push("/matchpage")}
            >
              Find a new warrior
            </button>
          </ButtonContainer>
        </Confetti>
      </WinnerContainer>
    </ContainerFilter>
  );
};

export default Winner;

const ContainerFilter = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

const WinnerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 50%);
  width: 75%;
  padding: var(--spacingM);
  text-align: center;
`;
const Points = styled.p`
  color: #7ef535;
  margin-top: var(--spacingXS);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacingS);
`;

const Confetti = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WinnerImageContainer = styled.div``;
