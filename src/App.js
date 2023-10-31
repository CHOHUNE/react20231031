function App() {
  //  jsx에서 태그 사용시 반드시 종료 태그를 작성 해야한다. html과 가장 다른 점
  //  빈 요소이면 시작 태그에서 종료

  return (
    <div>
      <h1> hello react </h1>
      <h2>hi react</h2>
      <p>
        Lorem ipsum dolor.
        <br /> Lorem ipsum dolor sit.
      </p>
      <MyComp />
    </div>
  );
}

function MyComp() {
  return (
    <>
      <h1> HI COMPONENT</h1>
      <h2>hello</h2>
    </>
  );

  //     return jsx 코드를 작성 가능한데 꼭 하나의 root tag여야한다.
  //     여러줄이면 ()로 감쌀 것
  //     만약 root tag가 필요 없다면
  //     fragment 사용 가능하다. (tag명이 없는 tag)
}

/* 보다시피 자바코드 안에 html 코드를 쓸수 있는데 jsx 코드라고 일컫는다
 위의 fucntion 하나를 component라고 하는데 다른 곳에서도 활용이 가능하다.
 브라우저가 제공하는 태그들은 소문자로 시작하고 직접 만드는 태그들은 대문자로 시작해야 한다.
built-in component  소문자
component 명은 대문자*/
export default App;
