import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function HomePage() {
  return (
    <>
      <MainNavigation />
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="/products">Products Page</Link>.
      </p>
    </>
  );
}

export default HomePage;
