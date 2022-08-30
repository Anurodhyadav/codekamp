import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
// import server from "../config/config"

export default function Home() {
  const [name, setname] = useState("");
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const handleSubmit = async () => {
    localStorage.setItem("nickname", name);
    const response = await axiosInstance("/account/login", {
      method: "POST",
      data: {
        name: name,
        password: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 5),
      },
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.accessToken);
      router.push("/matchpage");
    }
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  return (
    <Container>
      <LogoContainer>
        <Image src={"/asset/logo.svg"} height={64} width={256} />
      </LogoContainer>
      <Subheading>
        two coding warriors face off real-time on an exciting programming
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
