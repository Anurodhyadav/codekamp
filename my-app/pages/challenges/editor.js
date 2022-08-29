import styled from "styled-components";
import { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState();
  const [output, setOutput] = useState();

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

  const handleKeyUp = (value) => {
    setCode(value);
  };

  return (
    <EditorContainer>
      <Input>
        <Title>Start coding :</Title>
        <IDE onKeyUp={(e) => handleKeyUp(e.target.value)}></IDE>
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
