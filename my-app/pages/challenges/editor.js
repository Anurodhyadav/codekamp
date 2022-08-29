import styled from "styled-components";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket;

const Editor = () => {
  const [code, setCode] = useState();
  const [output, setOutput] = useState();

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
        setOutput(data.actualOutput);
        console.log(data.actualOutput);
      });
  };

  const handleKeyUp = (e) => {
    setCode(e.target.value);
    socket.emit('input-change', e.target.value)
  };

  return (
    <EditorContainer>
      <Input>
        <Title>Start coding :</Title>
        <IDE value={code} onChange={handleKeyUp}></IDE>
        <Submit onClick={() => runCode(code)}>Submit</Submit>
      </Input>

      <Output>
        <Title>Output :</Title>
        <OutputScreen>{output}</OutputScreen>
      </Output>
    </EditorContainer>
  );
};

export default Editor;

const EditorContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IDE = styled.textarea`
  width: 750px;
  height: 750px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const Output = styled.div`
  display: flex;
  flex-direction: column;
`;

const OutputScreen = styled.div`
  width: 750px;
  height: 350px;
  border: 2px solid red;
`;

const Title = styled.h2``;

const Submit = styled.button`
  width: 80px;
  height: 50px;
  margin-top: 10px;
`;
