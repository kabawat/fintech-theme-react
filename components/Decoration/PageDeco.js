import React from 'react';
import useStyles from './decoration-style';

export default function PageDeco() {
  const { classes } = useStyles();
  return (
    <div className={classes.deco}>
      <div className={classes.decoMain}>
        <div className={classes.decoLeft} />
        <div className={classes.decoRight} />
      </div>
    </div>
  );
}
