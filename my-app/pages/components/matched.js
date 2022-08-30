import styled from "styled-components";
import Image from "next/image"

import { useRouter } from 'next/router';


export default function Matched() {
    const router = useRouter();

    const handleEditorRoute = () => {
       router.push("/challenges/editor")
    }

    return (
        <Container>
            <Subheading>
                A Warrior has been found
            </Subheading>
            <Battle>
                <Info>
                    <Profile>
                        CC
                    </Profile>
                    <Name>
                        CamelCase
                    </Name>
                </Info>

                <ImageContainer>
                    {/* <img src={MainLogo} alt="Logo"/> */}
                    <Image src={"/asset/sword.svg"} height={256} width={256} />
                </ImageContainer>

                <Info>
                    <Profile>
                        SP
                    </Profile>
                    <Name>
                        SerialParser
                    </Name>
                </Info>

            </Battle>
            <ReadyButton onClick = {handleEditorRoute} class="primary-btn flex-center marginS" type="submit" >
                <>Ready for the battle</>
            </ReadyButton>
        </Container >
    )


}

const Battle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: var(--spacingS);
  
`;
const Name = styled.p`
`;
const ImageContainer = styled.div`
`;
const ReadyButton = styled.div`
   
`;

const Info = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-left: var(--spacingL);
    margin-right: var(--spacingL);
`;

const Container = styled.div`
  position:relative;
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

const Profile = styled.div`
height:80px;
width:80px;
background:var(--lightPurple);
color: var(--dark);
border-radius:100%;
display:flex;
font-size:24px;
font-weight:700;
justify-content:center;
align-items:center;
`;

const Subheading = styled.div`
position:absolute;
top: var(--spacingL);
font-weight: 700;
font-size: 32px;
text-align:center;
`;