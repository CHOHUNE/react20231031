import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수명 작성 관습
  // handle 이벤트명
  function handelClick() {
    console.log("second");
  }

  function handleMouseEnter() {
    console.log("third");
  }

  function handleMouseLeave() {
    console.log("4th");
  }

  return (
    <div>
      <Button onClick={() => console.log("first")}>B1</Button>
      <Button onClick={handelClick}>B2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        B3
      </Button>
    </div>
  );
}

export default App;
