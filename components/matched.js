import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

let opponentName;
let isOpponentReady;

export default function Matched(props) {
  let i;

  const [opponent, setOpponent] = useState({});
  const [currentUser, setCurrentUser] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const socket = props.socket;
  const readyStateInfoForUser = props.readyStateInfoForUser;

  const router = useRouter();

  useEffect(() => {
    const opponent_data = JSON.parse(props.opponent);

    if (opponent_data) {
      setOpponent(opponent_data);
      const current_user = props.currentUser;
      setCurrentUser(current_user);
    } else {
      // router.push("/");
    }
  }, []);

  useEffect(() => {
    // const { name, ready_state } = readyStateInfoForUser;
    opponentName = readyStateInfoForUser.name;
    isOpponentReady = readyStateInfoForUser.ready_state;

    if (opponentName === opponent?.name && isOpponentReady && loadingState) {
      router.push({
        pathname: "/challenges/editor",
        query: {
          opponentName: opponent?.name,
          currentUser: currentUser,
        },
      });
    }
  }, [readyStateInfoForUser]);

  const RedirectToEditor = () => {
    const readyStateForUser = {
      name: currentUser,
      opponent: opponent?.name,
      ready_state: true,
    };
    setLoadingState(true);

    if (opponentName === opponent?.name && isOpponentReady) {
      router.push({
        pathname: "/challenges/editor",
        query: {
          opponentName: opponent?.name,
          currentUser: currentUser,
        },
      });
    }

    socket.emit("ready-state", readyStateForUser);
    const { name, ready_state } = readyStateInfoForUser;
    if (name === opponent?.name && ready_state) {
      router.push({
        pathname: "/challenges/editor",
        query: {
          opponentName: opponent?.name,
          currentUser: currentUser,
        },
      });
    }
  };

  return (
    <Container>
      <Subheading>Warrior found</Subheading>
      <Battle>
        <Info>
          <Profile>
            {currentUser ? currentUser.substring(0, 2).toUpperCase() : "CC"}
          </Profile>
          <Name>{currentUser}</Name>
        </Info>

        <ImageContainer>
          <Image src={"/asset/sword.svg"} height={256} width={256} />
        </ImageContainer>

        <Info>
          <Profile>
            {opponent?.name
              ? opponent?.name?.substring(0, 2).toUpperCase()
              : "PP"}
          </Profile>
          <Name>{opponent?.name}</Name>
        </Info>
      </Battle>
      <ReadyButton
        disabled={loadingState}
        onClick={RedirectToEditor}
        className={`${loadingState ? "" : "primary-btn"} flex-center marginS`}
        type="submit"
      >
        {loadingState ? "Waiting for your opponent..." : "Ready for the battle"}
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
