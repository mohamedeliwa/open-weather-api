import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
  reducer: {
    weather: slice,
  },
});


export default store;