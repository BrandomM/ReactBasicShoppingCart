import styles from "./ProductList.module.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";

const API = "http://localhost:8080/api/product/list";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(API, {
        method: "GET",
      });
      const productList = await response.json();
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Shopping Cart</Link>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
