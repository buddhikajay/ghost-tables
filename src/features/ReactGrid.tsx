import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row, DefaultCellTypes,Id } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import "./styles.css";


const  getRows = (tableElement: HTMLTableElement): Row[] => {
  const rows: Row[] = [];
  const trs = tableElement.querySelectorAll("tr");

  trs.forEach((tr, rowIndex) => {
    const cells: DefaultCellTypes[] = [];
    const isHeader = rowIndex === 0;
    tr.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        cells.push({
          type: isHeader ? "header" : "text",
          text: element.textContent || "",
        });
      }
    });
    rows.push({
      rowId: isHeader ? "header" : rowIndex,
      cells,
    });
  });

  return rows;
}

const getColumns = (tableElement: HTMLTableElement): Column[] => {
  const columns: Column[] = [];
  const headers = tableElement.querySelectorAll("th");
  headers.forEach((header, index) => {
    columns.push({
      columnId: header.textContent?.trim() || `column${index}`,
      width: 150, // This is a default value; adjust as necessary
      resizable: true,
    });
  });
  return columns;
}

export const Grid = () => {
  const tableElement = document.getElementById("myTable") as HTMLTableElement;
  tableElement.style.display = "none";

  const [columns, setColumns] = React.useState<Column[]>(getColumns(tableElement));
  const rows = getRows(tableElement);

  const handleColumnResize = (ci: Id, width: number) => {
    setColumns((prevColumns) => {
        const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
        const resizedColumn = prevColumns[columnIndex];
        const updatedColumn = { ...resizedColumn, width };
        prevColumns[columnIndex] = updatedColumn;
        return [...prevColumns];
    });
}

  return (
<div className="bg-white overflow-x-scroll lg:max-w-[80vw] xl:max-w-[80vw] 2xl:max-w-[80vw] font-medium shadow-lg rounded-lg react-grid-container">
      <ReactGrid
        stickyTopRows={1}
        stickyLeftColumns={1}
        rows={rows}
        columns={columns}
        onColumnResized={handleColumnResize}
      />
    </div>
  );
};

export default Grid;
