import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>텍스트 바꾸기</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  function handleButtonClick() {
    setMessage("안녕하세요");
  }
  return (
    <div>
      <MyComp1 onClick={handleButtonClick}></MyComp1>
      {/* MyComp1에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/* MyComp2에 있는 text가 바뀌게 하려면*/}
    </div>
  );
}
export default App;
