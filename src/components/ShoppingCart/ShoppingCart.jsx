//import styles from "./ShoppingCart.module.scss";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";

export function ShoppingCart() {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const history = useHistory();

  const buy = async () => {
    const sale = {
      date: "2021-10-02",
      client: "Alguien",
      saleProducts: shoppingCart,
    };
    await fetch("http://localhost:8080/api/sale/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sale),
    });
    alert("Venta exitosa");
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <h1>Cart</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Product list</Link>
      {shoppingCart.map((shoppingItem) => (
        <ShoppingCartItem
          key={shoppingItem.product.id}
          product={shoppingItem.product}
          quantity={shoppingItem.quantity}
        />
      ))}
      <button onClick={() => buy()}>Buy</button>
    </div>
  );
}
