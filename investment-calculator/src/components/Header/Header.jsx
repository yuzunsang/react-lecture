import reactImg from "../../assets/investment-calculator-logo.png";

import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <img src={reactImg} />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
