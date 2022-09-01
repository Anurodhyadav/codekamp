import { useEffect, useState } from "react";
import styled from "styled-components";

export default function LookingForAMatch() {
  const [nickname, setNickname] = useState();
  useEffect(() => {
    setNickname(
      JSON.parse(localStorage.getItem("nickname"))
        .name.substring(0, 2)
        .toUpperCase()
    );
  }, []);

  return (
    <Container>
      <Subheading>Looking for a warrior....</Subheading>
      <Profile>{nickname}</Profile>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </Container>
  );
}

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

const Circle1 = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 80px;
  background-color: #8235f5;
  z-index: -1;
  border-radius: 100%;
  animation: expand ease-in 2.2s infinite;
`;

const Circle2 = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 80px;
  background-color: #ef3371;
  z-index: -2;
  border-radius: 100%;
  animation: expand2 ease-in 2.2s infinite;
`;

const Subheading = styled.div`
  position: absolute;
  top: var(--spacingL);
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;
