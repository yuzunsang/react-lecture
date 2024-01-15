import logoImg from "../../assets/investment-calculator-logo.png";

import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <img src={logoImg} />
      <h1>Investment Calculator</h1>
    </div>
  );
}
