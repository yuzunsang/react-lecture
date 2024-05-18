import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="meal" />
        <h1>ReactFood</h1>
      </div>
      <button>Cart (0)</button>
    </header>
  );
}
