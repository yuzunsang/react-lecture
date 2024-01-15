import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment.js";
import { formatter } from "./util/investment.js";

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <Result />
    </>
  );
}

export default App;
