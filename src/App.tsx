import './App.css';

import { Button, Divider, Grid, TextField, Theme, Typography, createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import QRCode from "react-qr-code";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const [qrValue, setQrValue] = useState("Hola Mundo!");
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom align="center">
        QR code online generator
      </Typography>
      <Divider />
      <Grid style={{ padding: 20 }} container spacing={8}>
        <Grid container item xs={12} lg={6} spacing={8} justifyContent="center" alignItems="center" direction="column">
          <Grid item xs>
            <TextField
              id="standard-multiline-flexible"
              label="Insert text"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="outlined"
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" onClick={() => setQrValue(value)} size="large" endIcon={<SendIcon />}>Generate QR</Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6} spacing={8} justifyContent="center" alignItems="center" direction="column">
          <Grid item xs={12} lg={6}>
            <QRCode value={qrValue} size={256}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
