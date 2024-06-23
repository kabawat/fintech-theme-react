import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './title-style';

export default function Title(props) {
  const { classes, cx } = useStyles();
  const { text, align } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={cx(classes.titleMain, setAlign(align))}>
      <div className={classes.deco} />
      <Typography variant="h4">
        {text}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
};

Title.defaultProps = {
  align: 'left',
};
