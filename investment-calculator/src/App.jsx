// 유저가 입력한 값을 받고 저장하기 위해서 useState 이용
import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // userInput 변경될 때마다 상태를 변경하는 handleChangeInput 함수 trigger
  // 값을 끌어올려 results 로 가져와 계산하기 위해 Lifting State 방법 사용
  function handleChangeInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChangeInput} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Not valid! Duration can be allowed at least 1.</p>
      )}
    </>
  );
}

export default App;
