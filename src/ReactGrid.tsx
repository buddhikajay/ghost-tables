// https://ag-grid.com/react-data-grid/getting-started
import * as React from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

interface GridProps {
  headers: string[];
  data: string[][];
}
export const Grid = ({ headers, data }: GridProps) => {
  const colDefs = headers.map((header, index) => {
    return { headerName: header, field: header, sortable: true, pinned: index === 0};
  }); // map the headers to the column definitions
  const rowData = data.map((row) => {
    return row.reduce((acc: any, cell, index) => {
      acc[headers[index]] = cell;
      return acc;
    }, {});
  }); // map the data to the row data
  console.log("rowData", rowData);
  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default Grid;
