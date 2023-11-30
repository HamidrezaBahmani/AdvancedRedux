//20- now we need to extract data from redux
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  //21-we need to pass funct which recive the redux state automaticaly and return the data which we wanna use in this component
  // we should drill into state.ui.cartIsVisible
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {/* 22-this is finished but now we need to manage content inside Cart  fot that go to cart-slice no comment anymore 258video */}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
