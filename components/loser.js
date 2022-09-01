import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Loser = () => {
  const router = useRouter();
  return (
    <ContainerFilter>

      <LoserContainer>
        <Image src={"/asset/loser.svg"} height={200} width={200} />
        <Points></Points>
        <h1>SORRY YOU LOST</h1>
        <p>
          It was a close battle but your opponent was more prepared than you. You
          may challenge more warriors and hone your coding skills to perform
          better
        </p>
        <ButtonContainer>
          <button
            onClick={() => router.push("/matchpage")}
            className="primary-btn"
          >
            Find a new warrior
          </button>
          {/* <Button onClick={() => router.push("/leaderboard")}>
          See LeaderBoard
        </Button> */}
        </ButtonContainer>
        <CloseContainer>
          <Image src={"/asset/close.svg"} height={24} width={24} />
        </CloseContainer>
      </LoserContainer>
    </ContainerFilter>

  );
};

export default Loser;

const ContainerFilter = styled.div`
  position:absolute;
  height:100vh;
  width:100%;
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
width:75%;
padding:var(--spacingM); 
text-align:center;
`;
const Points = styled.text`
  color: #7ef535;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacingS);

`;
const CloseContainer = styled.div`
  position: absolute;
  top:20px;
  right:20px;
  cursor:pointer;
  &:hover{
    transform:scale(1.2);
  }
`;