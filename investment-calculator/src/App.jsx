import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  function handleChangeInput(event, input) {
    console.log(event.target.value, input);
  }

  return (
    <>
      <UserInput onChangeInput={handleChangeInput} />
      <Result />
    </>
  );
}

export default App;
