import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Loser = () => {
  const router = useRouter();
  return (
    <LoserContainer>
      <Image src={"/asset/loser.svg"} height={280} width={250} />
      <Points>+100 Points</Points>
      <h1>YOU DID GREAT</h1>
      <Text>
        It was a close battle but your opponent was more prepared than you. You
        may challenge more warriors and hone your coding skills to perform
        better
      </Text>
      <ButtonContainer>
        <button
          onClick={() => router.push("/matchpage")}
          className="primary-btn"
        >
          Search for a new warrior
        </button>
        <Button onClick={() => router.push("/leaderboard")}>
          See LeaderBoard
        </Button>
      </ButtonContainer>
    </LoserContainer>
  );
};

export default Loser;

const LoserContainer = styled.div`
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

const Text = styled.div`
  text-align: center;
  padding: 3%;
`;
