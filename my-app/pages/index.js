import styled from "styled-components";
import Image from "next/image"

export default function Home() {
  return <Container>
    <LogoContainer>
       {/* <img src={MainLogo} alt="Logo"/> */}
       <Image src={"/asset/logo.svg"} height = {64} width = {256} />
       </LogoContainer>
      <Subheading>
       two coding warriors face off real-time on an exciting programming challenge.
       </Subheading>
       <Form className="NicknameInput">
  <Label>
    Nickname:
    <input className="inputBox" type="text" name="name" />
  </Label>
  <input class="primary-btn marginS" type="submit" value="Find a warrior"/>
</Form>

  </Container>;
}

const Container = styled.div`
  margin-top: var(--spacingL);
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

const LogoContainer = styled.div`

`;
const Form = styled.div`

`;
const Label = styled.div`

`;

const Subheading = styled.div`
margin-top: var(--spacingS);
font-weight: 300;
font-size: 18px;
`;