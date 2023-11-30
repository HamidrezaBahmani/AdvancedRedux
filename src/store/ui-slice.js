//2-
import { createSlice } from "@reduxjs/toolkit";

//3- it need obj for configuration
//4- store it in const
const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  //this is the map of all reducers or to be precise it's the map of methods
  //that represent all the diffrent cases/actions we wanna handle with tha reducer
  reducers: {
    toggle(state) {
      //get old state and put it in opposite
      //actully we are not allowed to mutating state event it looks like we do ,but behind scene immer extract the code
      // and represent an other imutable state
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
//5- we also need to export actions(now go to index.js)

export const uiActions = uiSlice.actions;
export default uiSlice;
