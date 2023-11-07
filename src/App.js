import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메세지")}>메시지변경</Button>
  );
}

function BComp() {
  const { message } = useContext(MessageContext);

  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기메세지");
  return (
    // context에 value넣기
    <div>
      <MessageContext.Provider
        value={{
          message,
          setMessage,
        }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1.context 만들기 : createContext(null)
//
const MessageContext = createContext(null);
export default App;
