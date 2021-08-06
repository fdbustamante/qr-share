import { Button, Popover, createStyles, makeStyles } from '@material-ui/core';

import { HexColorPicker } from 'react-colorful';
import LensIcon from '@material-ui/icons/Lens';
import React from 'react';
import { TFunction } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    buttonSize: {
      minWidth: 200,
    },
  }),
);

interface Props {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
  t: TFunction<'translation'>;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export function ColorPicker({ handleClick, t, open, anchorEl, handleClose, color, setColor }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.buttonSize}
        size="large"
        aria-describedby="colorpicker-id"
        variant="outlined"
        onClick={handleClick}
        endIcon={
          <LensIcon
            style={{
              color: color,
            }}
          />
        }>
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
        }}>
        <HexColorPicker color={color} onChange={setColor} />
      </Popover>
    </>
  );
}
