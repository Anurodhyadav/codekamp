import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Matched(props) {
  let i;
  // const [timeLeft, setTimeLeft] = useState(10);
  // const [startCountDown, setStartCountDown] = useState(false);
  const [opponent, setOpponent] = useState({})
  const [currentUser, setCurrentUser] = useState("")

  const router = useRouter();

  // const countDown =
  //   startCountDown &&
  //   setInterval(() => {
  //     i = timeLeft - 1;
  //     setTimeLeft(i);
  //   }, 1000);

  useEffect(() => {
    const opponent_data = JSON.parse(props.opponent);
    setOpponent(opponent_data)
    const current_user = props.currentUser;
    setCurrentUser(current_user);



    // setInterval(() => {
    //   setTimeLeft(timeLeft -1 )
    // }, 1000)



    // const startCounter = () => {
    //   setTimeLeft((timeLeft) => timeLeft - 1);
    //   if (timeLeft < 1) {
    //      console.log("happended")
    //   router.push({
    //     pathname: "/challenges/editor",
    //     query: {
    //       opponent: opponent,
    //       currentUser: currentUser
    //     },
    //   });
    // }
    // }

    // setInterval(startCounter, 1000);
    
    // if (timeLeft < 1) {
    //   clearInterval(countDown);
    //   router.push({
    //     pathname: "/challenges/editor",
    //     query: {
    //       opponent: opponent,
    //       currentUser: currentUser
    //     },
    //   });
    // }
    // return () => {
    //   clearInterval(startCounter);
    // }
  }, []);
  
  const RedirectToEditor = () => {
    router.push({
      pathname: "/challenges/editor",
      query: {
        opponentName: opponent.name,
        currentUser: currentUser
      },
    });
  }

  return (
    <Container>
      <Subheading>Warrior found</Subheading>
      <Battle>
        <Info>
          <Profile>CC</Profile>
          <Name>{JSON.parse(localStorage.getItem("nickname")).name}</Name>
        </Info>

        <ImageContainer>
          <Image src={"/asset/sword.svg"} height={256} width={256} />
        </ImageContainer>

        <Info>
          <Profile>SP</Profile>
          <Name>{opponent && opponent.name}</Name>
        </Info>
      </Battle>
      {/* {startCountDown && (
        <h1>{timeLeft === 10 ? `00:${timeLeft}` : `00:0${timeLeft}`}</h1>
      )} */}
      <ReadyButton
        // onClick={() => setStartCountDown(true)}
        onClick={RedirectToEditor}
        className="primary-btn flex-center marginS"
        type="submit"
      >
        Ready for the battle
      </ReadyButton>
    </Container>
  );
}

const Battle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacingS);
`;
const Name = styled.p``;
const ImageContainer = styled.div``;
const ReadyButton = styled.div``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: var(--spacingL);
  margin-right: var(--spacingL);
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  height: 80px;
  width: 80px;
  background: var(--lightPurple);
  color: var(--dark);
  border-radius: 100%;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const Subheading = styled.div`
  position: absolute;
  top: var(--spacingL);
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;
