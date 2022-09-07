import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Loser = ({ opponentCode, title }) => {
  const router = useRouter();
  const [viewOpponentCode, setViewOpponentCode] = useState(false);
  return (
    <ContainerFilter>
      {" "}
      <LoserContainer>
        {!viewOpponentCode ? (
          <>
            <Image src={"/asset/loser.svg"} height={280} width={250} />
            <Points></Points>
            <h1>SORRY YOU LOST</h1>
            <Text>
              It was a close battle but your opponent was more prepared than
              you. You may challenge more warriors and hone your coding skills
              to perform better
            </Text>
          </>
        ) : (
          <>
            <Title>{title}</Title>
            <OppoInputScreen value={opponentCode}></OppoInputScreen>
          </>
        )}
        <ButtonContainer>
          <button
            onClick={() => router.push("/matchpage")}
            className="primary-btn"
          >
            Search for a new warrior
          </button>
          {!viewOpponentCode && (
            <button
              className="secondary-btn"
              onClick={() => setViewOpponentCode(true)}
              style={{ margin: "0 10px" }}
            >
              View Opponent Code
            </button>
          )}
        </ButtonContainer>
      </LoserContainer>
    </ContainerFilter>
  );
};

export default Loser;

const ContainerFilter = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

const LoserContainer = styled.div`
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
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacingS);
`;

const Text = styled.p`
  text-align: center;
`;

const OppoInputScreen = styled.textarea`
  height: 250px;
  background: var(--dark);
  width: 100%;
  color: #ffffff;
  line-height: 135%;
  font-size: 14px;
  margin-top: var(--spacingXS);
  border-left: 2px solid (--dark);
  resize: none; /*remove the resize handle on the bottom right*/
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  align-self: flex-start;
`;
