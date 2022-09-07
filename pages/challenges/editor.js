import styled from "styled-components";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ShiftCipher } from "shift-cipher";
import challenges from "./challenges.json";
import { useRouter } from "next/router";
import Loser from "../../components/loser";
import Winner from "../../components/Winner";
import Image from "next/image";
import Loader from "../../components/loader";

let socket;

const Editor = () => {
  const [code, setCode] = useState();
  const [partnerCode, setpartnerCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [i, setI] = useState(2);
  const [apiResponse, setAPIResponse] = useState();
  const [count, setCount] = useState([1, 2]);
  const [testCase, setTestcase] = useState(0);
  const router = useRouter();
  const [partnerWon, setpartnerWon] = useState(false);
  const { opponentName, currentUser } = router.query;

  const cipher = new ShiftCipher();

  let testPassed = [];

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("../api/socket");
    socket = io();

    socket.on("update-input", (msg) => {
      if (msg.user === currentUser) {
        setCode(msg.code);
      }
      if (msg.user === opponentName) {
        setpartnerCode(msg.code);
      }
    });

    socket.on("user-submit-code", (code_submition) => {
      if (code_submition.coder === opponentName) {
        setpartnerWon(true);
      }
    });
  };

  const encrypt = (text) => {
    return cipher.encode(text);
  };

  const decrypt = (text) => {
    return cipher.decode(text);
  };

  const challenge = Object.values(challenges).filter(
    (item) => 613 === item.challengeId
  );

  const runCode = () => {
    setIsLoading(true);
    testPassed = [];
    fetch("https://api.programiz.pro/api/Challenge/run", {
      method: "POST",
      body: JSON.stringify({
        challengeId: 613,
        code: code,
      }),
      headers: {
        "Content-type": "application/json;",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjY2MjUzIiwibmJmIjoxNjYwODgxOTA4LCJleHAiOjE2NjM0NzM5MDgsImlhdCI6MTY2MDg4MTkwOH0.j4un52YXeiL2uSkWgpWR0-RLF9STpa-IhvQ6r3z_IDc",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const data = json.data;
        setAPIResponse(data);
        setIsLoading(false);
        const code_submition = {
          coder: currentUser,
          code_submitted: true,
        };

        data &&
          data.allAvailableTestsPassed &&
          socket.emit("code-submit", code_submition);
      });
  };

  const handleKeyUp = (e) => {
    setCode(e.target.value);
    const emit_value = {
      user: currentUser,
      code: e.target.value,
    };
    socket.emit("input-change", emit_value);
  };

  const handleEnter = (e) => {
    if (e.which === 13) {
      setI(i + 1);
      i > 2 && count.push(i);
    }
  };

  const handleTabChange = (id) => {
    setTestcase(id);
  };

  const handleTestCases = () => {
    apiResponse &&
      apiResponse.tests.map((test, id) => {
        return test.testPassed && testPassed.push(id);
      });
  };

  return (
    <EditorContainer>
      {isLoading && <Loader />}
      {apiResponse && apiResponse.allAvailableTestsPassed && <Winner></Winner>}
      {apiResponse && apiResponse.tests && handleTestCases()}
      {partnerWon && (
        <Loser opponentCode={partnerCode} title={challenge[0].title}></Loser>
      )}
      <OpponentEditor>
        <ProblemStatement>
          <Header>
            <Title>{challenge[0].title}</Title>
            <Question>{challenge[0].question}</Question>
          </Header>
          <ProblemDescription>
            <Tasks>
              {Object.values(challenge[0].task).map((task, index) => {
                return <li key={index}>{task}</li>;
              })}
            </Tasks>
          </ProblemDescription>
        </ProblemStatement>
        <Opponent>
          <OpponentName>Opponent Name: {opponentName}</OpponentName>
          <OpponentInfo></OpponentInfo>
          <OppoInputScreen
            value={partnerCode?.length && encrypt(partnerCode)}
          ></OppoInputScreen>
        </Opponent>
      </OpponentEditor>

      <UserEditor>
        <Input>
          <Run onClick={() => runCode(code)}>Run</Run>
          <IDE>
            <File>
              <FileName>
                <p>main.py</p>
              </FileName>
            </File>
            <FlexRow>
              <Lines>
                {count.map((element, index) => {
                  return <Line key={index}>{element}</Line>;
                })}
              </Lines>

              <InputScreen
                onChange={handleKeyUp}
                onKeyPress={(e) => handleEnter(e)}
              ></InputScreen>
            </FlexRow>
          </IDE>
        </Input>
        <OutputScreen>
          <OutputHeader>Output</OutputHeader>
          {apiResponse && !apiResponse.error ? (
            <>
              <Tab>
                <TabElement
                  active={testCase === 0}
                  onClick={() => handleTabChange(0)}
                >
                  <Image
                    src={
                      testPassed.includes(0)
                        ? "/asset/correct.svg"
                        : "/asset/incorrect.svg"
                    }
                    width={10}
                    height={10}
                  />
                  <TestTitle>Test Case 1</TestTitle>
                </TabElement>
                <TabElement
                  active={testCase === 1}
                  onClick={() => handleTabChange(1)}
                >
                  <Image
                    src={
                      testPassed.includes(1)
                        ? "/asset/correct.svg"
                        : "/asset/incorrect.svg"
                    }
                    width={10}
                    height={10}
                  />
                  <TestTitle>Test Case 2</TestTitle>
                </TabElement>
                <TabElement
                  active={testCase === 2}
                  onClick={() => handleTabChange(2)}
                >
                  <Image
                    src={
                      testPassed.includes(2)
                        ? "/asset/correct.svg"
                        : "/asset/incorrect.svg"
                    }
                    width={10}
                    height={10}
                  />
                  <TestTitle>Test Case 3</TestTitle>
                </TabElement>
                <TabElement
                  active={testCase === 3}
                  onClick={() => handleTabChange(3)}
                >
                  <Image
                    src={
                      testPassed.includes(3)
                        ? "/asset/correct.svg"
                        : "/asset/incorrect.svg"
                    }
                    width={10}
                    height={10}
                  />
                  <TestTitle>Test Case 4</TestTitle>
                </TabElement>
              </Tab>
              <Output>
                {apiResponse.tests.map((test, id) => {
                  return (
                    testCase === id && (
                      <TestCases key={id}>
                        <TestCase>
                          <h4>Input</h4> <div>{test.input}</div>{" "}
                        </TestCase>
                        <TestCase>
                          <h4>Your Output</h4> <div>{test.actualOutput}</div>
                        </TestCase>
                        <TestCase>
                          <h4>Expected Output</h4> <div>{test.output}</div>
                        </TestCase>
                      </TestCases>
                    )
                  );
                })}
              </Output>
            </>
          ) : (
            <Error>{apiResponse && apiResponse.error}</Error>
          )}
        </OutputScreen>
      </UserEditor>
    </EditorContainer>
  );
};

export default Editor;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

const EditorContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: var(--dark);
  color: #ffffff;
  @media screen and (min-width: 1441px) {
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
`;

const ProblemDescription = styled.div`
  font-weight: 200;
  font-size: 16px;
`;

const UserEditor = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding-top: var(--spacingS);
`;

const Opponent = styled.div`
  flex-grow: 1;
  margin-top: 2.5%;
`;

const OpponentEditor = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: var(--spacingS);
  justify-content: space-between;
`;
const ProblemStatement = styled.div`
  flex-grow: 0;
  margin-bottom: 2.5%;
`;

const OppoInputScreen = styled.textarea`
  height: 90%;
  background: var(--dark);
  width: 100%;
  color: #ffffff;
  line-height: 135%;
  font-size: 14px;
  margin-top: var(--spacingXS);
  border-left: 2px solid (--dark);
  filter: blur(2px);
  resize: none; /*remove the resize handle on the bottom right*/
`;

const Input = styled.div`
  position: relative;
`;
const OpponentName = styled.div`
  position: relative;
`;
const OpponentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IDE = styled.div``;

const Lines = styled.div`
  width: 30px;
  height: 65vh;
  list-style: none;
  color: var(--lightPurple);
  padding-top: 1%;
  overflow: hidden;
`;

const Line = styled.li`
  list-style: none;
  margin-left: 12px;
  font-size: 12px;
  line-height: 130%;
  margin-top: 3.3px;
`;

const File = styled.div`
  background: #000000;
  height: 30px;
  border-bottom: 2px solid gray;
`;

const FileName = styled.div`
  width: 60px;
  height: 50px;
  font-size: 12px;
  font-weight: 200;
  margin-left: 30px;
  color: white;
  border: 2px solid gray;
  p {
    text-align: center;
    margin-top: 2px;
  }
`;

const InputScreen = styled.textarea`
  padding: 1%;
  padding-bottom: 5%;
  background: var(--dark);
  width: calc(100% - 30px);
  height: 65vh;
  color: var(--lightPurple);
  line-height: 135%;
  font-size: 14px;
  border-left: 2px solid gray;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none; /*remove the resize handle on the bottom right*/
  &:focus {
    -moz-box-shadow: none;
    box-shadow: none;
    outline: 0;
  }
`;

const Tasks = styled.ul`
  font-weight: 200;
  font-size: 16px;
`;

const OutputScreen = styled.div`
  width: calc(100% - 30px);
  height: 35vh;
  background: var(--dark);
  color: white;
  align-self: flex-end;
`;

const Output = styled.div`
  padding: 15px;
  color: ${(props) => (props.isError ? "red" : "white")};
`;

const OutputHeader = styled.div`
  background: #000000;
  padding-top: 1%;
  padding-bottom: 1%;
`;

const Question = styled.h2`
  font-weight: 400;
  font-size: 18px;
`;

const Run = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 85px;
  height: 30px;
  border: none;
  font-weight: 500;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: var(--lightPurple);
    color: var(--dark);
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

const TabElement = styled.span`
  display: flex;
  color: ${(props) => (props.active ? "#ccccff" : "white")};
  border-bottom: ${(props) =>
    props.active ? "3px solid #ccccff" : "3px solid white"};
  width: 30%;
  font-weight: bold;
  cursor: pointer;
`;

const TestCases = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TestCase = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 4px;
  background: black;
  color: var(--lightPurple);
  width: 30%;
  text-align: left;
  padding-left: 10px;
  padding-bottom: 15px;
  line-height: 50%;
`;

const Error = styled.div`
  color: red;
  padding: 3%;
`;

const TestTitle = styled.div`
  margin-left: 5px;
`;
