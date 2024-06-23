import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useStyles from './hero-banner-style';

function HeroBanner(props) {
  const { classes } = useStyles();
  const { children, deco } = props;
  return (
    <div className={classes.heroBannerWrap}>
      {deco && (
        <div className={classes.deco}>
          <div className={classes.decoLeft}>
            <span className={classes.leaf} />
            <span className={classes.land} />
            <span className={classes.round} />
          </div>
        </div>
      )}
      <Container className={classes.container}>
        {children}
      </Container>
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
  deco: PropTypes.bool,
};

HeroBanner.defaultProps = {
  deco: false
};

export default HeroBanner;
