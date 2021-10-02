import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ProductList } from "./components/ProductList/ProductList";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Switch>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
