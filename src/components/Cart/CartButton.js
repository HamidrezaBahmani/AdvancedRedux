import classes from "./CartButton.module.css";
//16-
import { uiActions } from "../../store/ui-slice";
//17-
import { useDispatch } from "react-redux";
const CartButton = (props) => {
  //18-
  const dispatch = useDispatch();
  //15
  const toggleCartHandler = () => {
    //19 (now we change state but should use it for now goto the App.js where we rendered the Cart)
    dispatch(uiActions.toggle());
  };
  return (
    // {14-set oncliclickproperty}
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
