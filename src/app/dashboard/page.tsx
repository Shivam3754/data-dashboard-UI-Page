import React from "react";
import { Box } from "@mui/material";
// import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow/TransactionsBottomRow";
import Grid from "@mui/system/Grid";

export default function Dashboard(){
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        {/*Data Ribbbon - Showing numerical stats*/}
        <DataRibbon />
        {/*TransactionsPerDay - graph - numericalcards*/}
        <TransactionsPerDay />
      </Grid>
      {/*Transaction Doughnut Charts Bottom Row - a few doughnut charts to breakdown some data into fractions*/}
      <TransactionsBottomRow />
    </Box>
  );
};

