import styled from "styled-components";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket;

import challenges from "./challenges.json";


const Editor = () => {
  const [code, setCode] = useState();
  const [apiResponse, setpiRsponse] = useState();
  //   const [challengesDescrition, set]
  const [output, setOutput] = useState();
  //   const id = [613, 629, 638, 618];
  const id = 612;

  //   const randomElement = id[Math.floor(Math.random() * id.length)];

  useEffect(() => {
    socketInitializer()
  }
    , [])

  const socketInitializer = async () => {
    await fetch('../api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      console.log("This is the message", msg);
      setCode(msg);
    })
  }

  // const onChangeHandler = (e) => {
  //   setInput(e.target.value)
  //   socket.emit('input-change', e.target.value)
  // }

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
        setApiResponse(data);
        setOutput(data.actualOutput);
      });
  };

  const handleKeyUp = (e) => {
    setCode(e.target.value);
    socket.emit('input-change', e.target.value)
  };

  return (
    <EditorContainer>
      <Input>

        <h2>Challenge :</h2>
        <Title>Start coding :</Title>
        <IDE value={code} onChange={handleKeyUp}></IDE>
        <Submit onClick={() => runCode(code)}>Run</Submit>

      </Input>
      <Output>
        <h2>Output :</h2>
        <OutputScreen>{output}</OutputScreen>
      </Output>
    </EditorContainer>
  );
};

export default Editor;

const EditorContainer = styled.div`
  padding: 5% 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IDE = styled.textarea`
  width: 550px;
  height: 550px;
  background: white;
  color: black;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3%;
`;

const Output = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3%;
`;

const OutputScreen = styled.div`
  width: 550px;
  height: 250px;
  background: white;
  color: black;
  border: 2px solid white;
`;

const Title = styled.h3``;

const Submit = styled.button`
  width: 85px;
  height: 30px;
  margin-top: 10px;
`;
