import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment.js";
import { formatter } from "./util/investment.js";

function App() {
  const [value, setValue] = useState(0);
  const changeValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <Header />
      <UserInput value={value} />
      <div>
        <span>{changeValue}</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Result />
    </>
  );
}

export default App;
