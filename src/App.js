function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);

  let messageClassName = "win";
  let message = "다시던져";
  if (num1 === num2) {
    messageClassName = "win";
    message = "당다당당당처처럼첨첨";
  }
  return (
    <>
      <h1> 1번 주사위 {num1}</h1>
      <h1> 2번 주사위 {num2}</h1>
      <h1 className={messageClassName}>{message}</h1>
    </>
  );
}

export default App;
