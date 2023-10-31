function App() {
  const name = "흐임ㄴ";
  return (
    <>
      <h1> 이름은 {name}</h1>
      <h1>이름은{"흐임ㄴ"}</h1>
      <h3>이름은 흐임ㄴ</h3>
      <div className={"error"}> Lorem ipsum.</div>
      <div className={"error"}> Lorem ipsum.</div>
      중괄호 안에 문자를 적나 안적나 무관하다
    </>
  );
}

export default App;
