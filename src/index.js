import ReactDOM from "react-dom/client";
//10-
import { Provider } from "react-redux";
//11-
import store from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //12-now we can utilize store in other components(go to Layout/MainHeader)
  <Provider store={store}>
    <App />
  </Provider>
);
