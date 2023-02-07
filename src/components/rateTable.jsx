import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useState } from "react";
import style from "./home.module.css";

const columns = [
  { field: "id", headerName: "Currency", width: 350 },
  { field: "name", headerName: "Rate", width: 350 },
];

export default function DataTable() {
  const { exchangeRates } = useSelector((state) => state?.allExchangeList);
  let [rows, setRows] = useState(null);
  React.useEffect(() => {
    let rows = Object.entries(exchangeRates)?.map((rate) => ({
      id: rate[0],
      name: rate[1],
    }));
    setRows(rows);
  }, [exchangeRates]);
  return (
    <section className={style.tableWrapper}>
      <div className={style.table}>
        {rows ? (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        ) : null}
      </div>
    </section>
  );
}
