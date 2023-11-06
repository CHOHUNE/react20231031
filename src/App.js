import React, { useState } from "react";
import { Text, Button, Box } from "@chakra-ui/react";

function App(props) {
  // set 메소드 상태 변경할 수 있음
  // 상태가 같은 지 아닌 지 판단해서 re-render결정함
  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });
  function handleNumberObjectChange() {
    // // 이렇게 사용하면 리액트가 인식을 잘 못함
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);
    //   복사 해서 써야함
    const newNumberObject = { ...numberObject };
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
  }
  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}> number 객체 변경 </Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
