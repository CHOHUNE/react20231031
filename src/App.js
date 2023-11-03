import React from "react";
import { Button } from "@chakra-ui/react";

for (let i = 0; i < 5; i++) {}
function App(props) {
  // 브라우저는 이벤트 핸들러 메소드
  // event 객체를 매개값으로 넣어줌
  function handleClick(event) {
    console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.type);
  }

  console.log("버튼클릭1");
  return (
    <div>
      <Button colorScheme="orange.200" onClick={handleClick}>
        {" "}
        button1
      </Button>
      <Button colorScheme="blue" onClick={handleClick}>
        {" "}
        button2
      </Button>
    </div>
  );
}

export default App;
