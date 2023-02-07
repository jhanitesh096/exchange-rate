import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    exchangeRates: [],
  },
  reducers: {
    getCurrency: (state, action) => {
      state.exchangeRates = action.payload;
    },
  },
});


export const { getCurrency } = currencySlice.actions;

export default currencySlice.reducer;
