import './App.css';

import { Button, Divider, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("Hola");

  const [qrValue, setQrValue] = useState("Hola");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Grid style={{ margin: 20 }} container spacing={3}>
      <Grid container item xs={6} spacing={3} justifyContent="center" alignItems="center" direction="column">
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => setQrValue(value)} size="large">Generate QR</Button>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <QRCode value={qrValue} size={256}/>
      </Grid>
    </Grid>
  );
}

export default App;
