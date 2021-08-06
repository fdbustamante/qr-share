import './App.css';
import './i18n/config';

import { Button, Container, Divider, Grid, MenuItem, Popover, Select, TextField, Typography, createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import { HexColorPicker } from 'react-colorful';
import LensIcon from '@material-ui/icons/Lens';
import QRCode from 'react-qr-code';
import SendIcon from '@material-ui/icons/Send';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    centerItem: {
      textAlign: 'center',
    },
    rightItem: {
      textAlign: 'right',
    },
    buttonSize: {
      minWidth: 200,
    }
  }),
);

function App(): JSX.Element {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [qrValue, setQrValue] = useState('Hola Mundo!');
  const [qrColor, setQrColor] = useState('#000000');
  const [color, setColor] = useState('#000000');
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [currentLang, setCurrentLang] = React.useState('en');

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeLang = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  const generateQr = () => {
    setQrValue(value);
    setQrColor(color);
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom align="center" style={{ marginTop: 20 }}>
        {t('title')}
      </Typography>
      <Grid style={{ padding: 20}} container spacing={8}>
        <Grid item xs={12} className={classes.rightItem}>
          {t('select_lang')}&nbsp;
          <Select label="Seleccionar" value={currentLang} onChange={handleChangeLang}>
            <MenuItem value={'en'}>EN</MenuItem>
            <MenuItem value={'es'}>ES</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Divider />
      <Grid style={{ padding: 20, marginTop: 20 }} container spacing={8}>
        <Grid item xs={12} md={6} container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label={t('insert_text')}
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
                {t('select_color')}
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
              <Button className={classes.buttonSize} variant="contained" color="primary" onClick={generateQr} size="large" endIcon={<SendIcon />}>
                {t('generate_qr')}
              </Button>
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
