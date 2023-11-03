import React from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("다른 일을 시킴");
  }
  function handleSubmit(e) {
    e.preventDefault();
    //   기본기능취소
    console.log("다른일시킴 ");
  }
  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네 이 년
      </a>
      <div>
        <form action="https://www.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}
export default App;
