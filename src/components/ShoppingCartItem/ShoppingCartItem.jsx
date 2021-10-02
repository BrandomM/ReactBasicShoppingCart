import styles from "./ShoppingCartItem.module.scss";

import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function ShoppingCartItem({ product, quantity }) {
  const { shoppingCartDispatch } = useContext(ShoppingCartContext);

  const increase = (id, max) => {
    if (quantity >= product.units) {
      return;
    }
    shoppingCartDispatch({ type: "INCREASE_ONE", payload: id });
  };

  const decrease = (id) => {
    if (quantity <= 1) {
      return;
    }
    shoppingCartDispatch({ type: "REDUCE_ONE", payload: id });
  };

  const removeProduct = (id) => {
    shoppingCartDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className={styles.item}>
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <h3>Quantity: {quantity}</h3>
      <h3>Max quantity: {product.units}</h3>
      <button onClick={() => increase(product.id)}>[+]</button>
      <button onClick={() => decrease(product.id)}>[-]</button>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
}
