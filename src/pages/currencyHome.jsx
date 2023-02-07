import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CompareGraph from "../components/compareGraph";
import Home from "../components/home";
import DataTable from "../components/rateTable";
import { getCurrency } from "../feature/currSlice";
import { getRates } from "../services/getRates";

function CurrencyHome() {
  const [currency, setCurrency] = useState('USD');
  const dispatch = useDispatch();

  const getAllRates = async (curr) => {
    const res = await getRates(curr);
    if (res?.status === 200 && res?.data?.rates) {
      dispatch(getCurrency(res?.data?.rates));
    }
  };
  useEffect(() => {
    if (currency) {
      getAllRates(currency);
    }
  }, [currency]);

  return (
    <div>
      <Home setCurrency={setCurrency} selectedCurrency={currency} />
      <CompareGraph  />
      <DataTable />
    </div>
  );
}

export default CurrencyHome;
