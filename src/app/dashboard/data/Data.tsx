"use client"
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

// Create a custom loading overlay using LinearProgress
const CustomLoadingOverlay = () => {
  return <LinearProgress />;
};

export default function Data(){
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <h1>Data</h1>
      <p>
        The bestest of data available here at your finger tips in table form.
        This could be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

