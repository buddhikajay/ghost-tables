import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const getTableHeaders = (table: HTMLTableElement) => {
  const headers: string[] = [];
  const headerElements = table.querySelectorAll("th");
  headerElements.forEach((headerElement) => {
    headers.push(headerElement.textContent as string);
  });
  return headers;
};

const getTableData = (table: HTMLTableElement) => {
  const data: string[][] = [];
  const rowElements = table.querySelectorAll("tbody tr");
  rowElements.forEach((rowElement) => {
    const row: string[] = [];
    const cellElements = rowElement.querySelectorAll("td");
    cellElements.forEach((cellElement) => {
      row.push(cellElement.textContent as string);
    });
    data.push(row);
  });
  return data;
};

const ghostTables = () => {
  try {
    // find all tables in the document
    const tables = document.querySelectorAll("table");
    // render the App component for each table
    tables.forEach((table) => {
      const headers = getTableHeaders(table);
      const data = getTableData(table);
      if (!table.id) {
        table.id = `table-${Math.random().toString(36).substr(2, 9)}`;
      }
      // Create an adjecent element to table to render the App component
      const div = document.createElement("div");
      div.id = `div-${table.id}`;
      table.insertAdjacentElement("afterend", div);
      // Render the App component
      const querySelector = `#${div.id}`;
      console.log(`Rendering App for table with id: ${querySelector}`);
      render(<App headers={headers} data={data} />, div);
      table.hidden = true;
    });
  } catch (error) {
    console.error("Error rendering tables", error);
  }
};

// @ts-ignore
window.ghostTables = ghostTables;
