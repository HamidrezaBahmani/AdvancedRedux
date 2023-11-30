//1-for impelemening redux first we need to npm install npm i @reduxjs/toolkit && npm i react-redux
//after that make store folder beside components folder and make index.js in taht file.
//for creating multiple slice for redux make an other 2 file beside index.js i.e ui-slice.js & cart-slice.js
//this is not a must do but it makes it more manageable and we don't end up with super large code file.
//(go to ui-slice) to get start

//6- here we wanna create our store
import { configureStore } from "@reduxjs/toolkit";
//8-
import uiSlice from "./ui-slice";

//7-configureStore need to have obj where we setup our root reducer
const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});
//9-(go to main index.js)
export default store;
