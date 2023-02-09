import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { server } from "../config/config";

export default function Home() {
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
  }, []);

  const axiosInstance = axios.create({
    baseURL: `${server}/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const handleSubmit = async () => {
    if (!user) return;
    localStorage.setItem("nickname", JSON.stringify(user));

    // const response = await axiosInstance.post("/account/joinRoom", { user });

    // const data = response.data;

    // const { roomId, joining } = data;

    // router.push({
    //   pathname: "/matchpage",
    //   query: {
    //     roomId: roomId,
    //     joining: joining,
    //   },
    // });

    // if (response.status === 200) {
    router.push("/matchpage");
    // }
  };

  const handleNameChange = (e) => {
    const data = { name: e.target.value, isReady: false, testPassed: false };
    setUser(data);
  };
  return (
    <Container>
      <LogoContainer>
        <Image src={"/asset/logo.svg"} height={64} width={256} />
      </LogoContainer>
      <Subheading>
        Two coding warriors face off real-time on an exciting programming
        challenge.
      </Subheading>
      <Form className="NicknameInput">
        <Label>
          Nickname:
          <input
            className="inputBox"
            onChange={handleNameChange}
            type="text"
            name="name"
          />
        </Label>
        <input
          className="primary-btn marginS"
          type="submit"
          value="Find a warrior"
          onClick={handleSubmit}
        />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: var(--spacingL);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div``;
const Form = styled.div``;
const Label = styled.div``;

const Subheading = styled.div`
  margin-top: var(--spacingS);
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`;
