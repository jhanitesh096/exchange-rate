import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "./home.module.css";
import { currency } from "../data";

export default function Home({ selectedCurrency, setCurrency }) {
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className={style.box}>
      <h2 className={style.heading}>Exchange Rates</h2>
      <FormControl fullWidth>
        <InputLabel id='select-label'>Currency</InputLabel>
        <Select
          labelId='select-label'
          id='simple-select'
          value={selectedCurrency}
          label='Currency'
          onChange={handleChange}
        >
          {currency?.map((curr) => (
            <MenuItem
              key={curr.sym}
              value={curr.sym}
            >{`${curr.name} (${curr.sym})`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
