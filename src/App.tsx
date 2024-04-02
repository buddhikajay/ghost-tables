import * as React from "react";
import Grid from "./ReactGrid";

interface AppProps {
  headers: string[];
  data: string[][];
}
export default function App({ headers, data }: AppProps) {
  // validate the data
  return (
    <div>
      <Grid headers={headers} data={data} />
    </div>
  );
}
