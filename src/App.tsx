import './App.css';

import { Button, Container, Divider, Grid, Popover, TextField, Theme, Typography, createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import { HexColorPicker } from "react-colorful";
import LensIcon from '@material-ui/icons/Lens';
import QRCode from "react-qr-code";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    centerItem: {
      textAlign: "center",
    },
    buttonSize: {
      minWidth: 200,
    }
  }),
);

function App() {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [qrValue, setQrValue] = useState("Hola Mundo!");
  const [qrColor, setQrColor] = useState("#000000");
  const [color, setColor] = useState("#000000");
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const generateQr = () => {
    setQrValue(value);
    setQrColor(color);
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom align="center" style={{ marginTop: 20 }}>
        QR Code Generator
      </Typography>
      <Divider />
      <Grid style={{ padding: 20, marginTop: 20 }} container spacing={8}>
        <Grid item xs={12} md={6} container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Insert text"
              multiline
              rows={4}
              value={value}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} container spacing={0}>
            <Grid item xs={12} md={6} className={classes.centerItem} style={{marginTop: 20}} >

            <Button className={classes.buttonSize} size="large" aria-describedby="colorpicker-id" variant="outlined" onClick={handleClick}  endIcon={<LensIcon style={{color: color}} />}>
              Select Color
            </Button>
            <Popover
              id="colorpicker-id"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <HexColorPicker color={color} onChange={setColor} />
            </Popover>
            </Grid>
            <Grid item xs={12} md={6} className={classes.centerItem} style={{marginTop: 20}} >
            <Button className={classes.buttonSize} variant="contained" color="primary" onClick={generateQr} size="large" endIcon={<SendIcon />}>Generate QR</Button>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.centerItem}>
            <QRCode value={qrValue} size={256} fgColor={qrColor} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
