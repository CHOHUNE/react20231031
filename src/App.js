import React from "react";
import { Button, Input } from "@chakra-ui/react";

for (let i = 0; i < 5; i++) {}
function App(props) {
  let text = "initial text";
  function handleChange(e) {
    console.log(e.target.value);
    text = e.target.value;
    console.log("text", text);
  }
  //  이벤트를 받고 싶으면 핸들체인지 함수에 e로 파라메터를 받음(event)
  //  children 과 비슷하게 target은 받는 함수를 말함
  return (
    <div>
      <p>{text}</p>
      <Input onChange={handleChange}></Input>
      <Input onChange={handleChange}></Input>
      {/*  서로 다른 엘레멘트도 서로 다른 밸류값이 출력됨 */}
    </div>
  );
}
export default App;
