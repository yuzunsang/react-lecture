import logo from "../../assets/investment-calculator-logo.png";

import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <img src={logo} />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
