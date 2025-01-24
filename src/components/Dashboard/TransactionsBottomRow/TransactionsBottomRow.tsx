import React from "react";
import DataChart from "@/components/DataChart/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <div className={scss.bottomRow}>
      <Paper className={scss.dataCard}>
        <p>Transactions per user type</p>
        <DataChart type={"doughnut"} data={doughnutChartData} />
      </Paper>
      <Paper className={scss.dataCard}>
        <p>Transactions per user type</p>
        <DataChart type={"doughnut"} data={doughnutChartData} />
      </Paper>
      <Paper className={scss.dataCard}>
        <p>Transactions per user type</p>
        <DataChart type={"doughnut"} data={doughnutChartData} />
      </Paper>
      <Paper className={scss.dataCard}>
        <p>Transactions per user type</p>
        <DataChart type={"doughnut"} data={doughnutChartData} />
      </Paper>
    </div>
  );
};

export default TransactionBottomRow;
