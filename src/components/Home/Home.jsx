//import styles from "./Home.module.scss";

import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/products">Product list</Link>
      <Link to="/cart">Shopping Cart</Link>
    </div>
  );
}
