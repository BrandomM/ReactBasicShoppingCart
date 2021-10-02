import styles from "./ProductCard.module.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function ProductCard({ product }) {
  const { shoppingCart, shoppingCartDispatch } =
    useContext(ShoppingCartContext);

  const addProduct = (product) => {
    const payload = {
      quantity: 1,
      unitPrice: product.price,
      product
    };
    shoppingCartDispatch({ type: "ADD_TO_CART", payload: payload });
  };

  const removeProduct = (id) => {
    shoppingCartDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <h5>Units: {product.units}</h5>
      {shoppingCart.filter(
        (cartElement) => cartElement.product.id === product.id
      ).length <= 0 ? (
        <button onClick={() => addProduct(product)}>Add to cart</button>
      ) : (
        <button onClick={() => removeProduct(product.id)}>
          Remove from cart
        </button>
      )}
    </div>
  );
}
