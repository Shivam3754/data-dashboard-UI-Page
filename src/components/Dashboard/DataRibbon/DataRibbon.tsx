import React from "react";
import { Grid } from "@mui/material"; // Use @mui/material's Grid for better control
import DataCard from "../DataCard/DataCard";
import scss from "./DataRibbon.module.scss";

export default function DataRibbon() {
  return (
    <Grid container spacing={4} className={scss.dataRibbon}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all DataSoft products in the current financial year"
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DataCard
          title={"Conversion rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
}
