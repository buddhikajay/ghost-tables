import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import DataTable from './features/DataTable';
import Grid from './features/ReactGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="xl">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example with Tailwind CSS in TypeScript
        </Typography>
        {/* <DataTable /> */}
        <Grid />
        <Copyright />
      </div>
    </Container>
  );
}
