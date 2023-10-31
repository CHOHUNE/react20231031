function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold",
    fontSize: "70px",
    textAlign: "center",

    //   lowerCamelCase로 써야한다.
    //   (html에서는 하이픈으로연결)
  };

  return (
    <>
      {/* style 속성은 객체로 주어야 함 */}
      <div style={myStyle}>제육먹고싶다</div>
      <hr />
      <div
        style={{
          color: "red",
          backgroundColor: "yellow",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        기사식당 가고 십다
      </div>
    </>
    //  스타일 속성은 객체로 주어야 한다.
    //   객체에 담아서 쓰거나, 소괄호 안에 쓰거나
  );
}

export default App;
