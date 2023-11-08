import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

//  첫 번째 파라메터 (setup): The function with your Effect's logic. 부작용이 있는 함수
// 여기서 부작용이란 부수적인 추가적 작용이다.
//  두 번째 파라메터 : setup을 실행시키는 값의 나열 ( Array )
//  빈 배열일 시 첫 렌더링 때만 실행됨
//  두 번째 파라메터에 들어갈 수 있는 건 prop,state 의존성을 부여하는 모든 변수.
function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("effect 함수 실행됨 ");
  }, [number, text]);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      {/*  number를 적음으로서 number를 실행할 때 마다 useEffect가 실행됨 */}
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Text>{text}</Text>
    </div>
  );
}
export default App;
