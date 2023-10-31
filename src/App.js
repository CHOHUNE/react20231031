function App() {
  // jsx 가 js 코드로 변환됨
  // 따라서 js키워드를 사용할 수 없음
  // 예를 들어 class를 쓸수 없고 (html 키워드) className
  //  리액트 키워드로 작성 해야 한다

  return (
    <>
      {/* class 속성은 className*/}
      <div className="header">Lorem.</div>
      {/* for 속성은 htmlFor*/}
      <div>
        <label htmlFor="">이름</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="ageInput"></label>
        <input type="text" id="ageInput" />
      </div>
    </>
  );
}

export default App;
