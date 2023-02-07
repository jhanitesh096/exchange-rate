import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./feature/currSlice";

export default configureStore({
  reducer: {
    allExchangeList: currencyReducer,
  },
});
