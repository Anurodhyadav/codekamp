
import styled from "styled-components";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket;

import challenges from "./challenges.json";


const Editor = () => {
  const [code, setCode] = useState();
  const [partnerCode, setpartnerCode] = useState();
  const [i, setI] = useState(2);
  const [count, setCount] = useState([1, 2]);
  const [output, setOutput] = useState();
  const id = 612;

  const clients = [];

  //   const challengeId = id[Math.floor(Math.random() * id.length)];

  useEffect(() => {
    socketInitializer()
  }
    , [])

  const socketInitializer = async () => {
    await fetch('../api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected');
    })

    socket.on('update-input', msg => {
      if (msg.user === localStorage.getItem('nickname')) {
        setCode(msg.code);
      }
      if (msg.user !== localStorage.getItem('nickname')) {
        setpartnerCode(msg.code);
      }
    
    })

    // socket.on('broad-cast-user', data => {
    //   console.log('this is the user data i need', data);
    // })

    // socket.on('news', function (data) {
    //   const nickname = localStorage.getItem('nickname');
    //   socket.emit('user', nickname);
    // });
  }

  const runCode = () => {
    fetch("https://api.programiz.pro/api/Challenge/run", {
      method: "POST",
      body: JSON.stringify({
        challengeId: id,
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
        setOutput(data.actualOutput);
      });
  };

  const handleKeyUp = (e) => {
    setCode(e.target.value);
    const emit_value = {
      user: localStorage.getItem('nickname'),
      code: e.target.value
    }
    socket.emit('input-change', emit_value)
  };

  const handleEnter = (e) => {
    if (e.which === 13) {
      setI(i + 1);
      i > 2 && count.push(i);
    }
  };

  return (
    <EditorContainer>

      <Header>
        <Title>Programming Challenge</Title>
        <Question>{challenges.challenge1.question}</Question>
      </Header>
      <ProblemDescription>
        <Description>Problem Description:</Description>
        <Tasks>
          {Object.values(challenges.challenge1.task).map((task) => {
            return <li>{task}</li>;
          })}
        </Tasks>
      </ProblemDescription>
      <EditorBody>
        <UserEditor>
          <Input>
            <Run onClick={() => runCode(code)}>Run</Run>
            <IDE>
              <InputScreen
                onKeyPress={(e) => handleEnter(e)}
                value={code} onChange={handleKeyUp}
              ></InputScreen>
              <File>
                <FileName>
                  <p>main.py</p>
                </FileName>
              </File>
              <Lines>
                {count.map((element, index) => {
                  return <Line key={index}>{element}</Line>;
                })}
              </Lines>
            </IDE>
          </Input>
          <OutputScreen>
            <OutputHeader>Output</OutputHeader>
            <Output>{output}</Output>
          </OutputScreen>
        </UserEditor>
        <OpponentEditor>
          <Input>
            <IDE>
              <InputScreen value={partnerCode}></InputScreen>
              <File>
                <FileName>
                  <p>main.py</p>
                </FileName>
              </File>
              <Lines></Lines>
            </IDE>
          </Input>
        </OpponentEditor>
      </EditorBody>

      {/* <Input>

        <h2>Challenge :</h2>
        <Title>Start coding :</Title>
        <IDE value={code} onChange={handleKeyUp}></IDE>
        <Submit onClick={() => runCode(code)}>Run</Submit>

      </Input>
      <Output>
        <h2>Output :</h2>
        <OutputScreen>{output}</OutputScreen> */}
      {/* </Output> */}

    </EditorContainer>
  );
};

export default Editor;

const Title = styled.h1`
  text-align: center;
`;

const EditorContainer = styled.div`
  padding: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;

  @media screen and (min-width: 1441px) {
    padding: 3% 15%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProblemDescription = styled.div``;

const EditorBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserEditor = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3%;
`;

const OpponentEditor = styled.div`
  padding: 3%;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const IDE = styled.div`
  width: 550px;
`;

const Lines = styled.div`
  background: #1c1c1c;
  width: 30px;
  height: 250px;
  list-style: none;
`;

const Line = styled.li`
  list-style: none;
  margin-left: 12px;
  font-size: 14px;
  line-height: 130%;
  margin-top: 1px;
`;

const File = styled.div`
  background: #1c1c1c;
  height: 30px;
  border-bottom: 3px solid gray;
`;

const FileName = styled.div`
  width: 60px;
  height: 50px;
  font-size: 13px;
  margin-left: 30px;
  color: white;
  border: 3px solid gray;

  p {
    text-align: center;
    margin-top: 2px;
  }
`;

const InputScreen = styled.textarea`
  position: absolute;
  width: 520px;
  height: 250px;
  background: var(--lightPurple);
  color: #1c1c1c;
  margin-left: 30px;
  margin-top: 30px;
  line-height: 135%;
  font-size: 14px;
  border-left: 3px solid gray;
  font-family: "Rubik", sans-serif;
`;

const Tasks = styled.ul`
  margin-left: 30px;
`;

const Description = styled.h2`
  margin-left: 40px;
`;

const OutputScreen = styled.div`
  width: 550px;
  height: 250px;
  background: #1c1c1c;
  color: white;
`;

const Output = styled.div`
  margin-left: 3%;
`;

const OutputHeader = styled.h3`
  padding-left: 3%;
`;

const Question = styled.h2`
  text-align: center;
`;

const Run = styled.button`
  width: 85px;
  height: 30px;
  margin-top: 10px;
  float: right;
  align-self: flex-end;
  border: none;
  border-radius: 3px;

  &:hover {
    background: var(--lightPurple);
    color: #1c1c1c;
  }
`;