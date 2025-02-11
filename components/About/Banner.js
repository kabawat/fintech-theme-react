import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HeroBanner from '../HeroBanner';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Banner(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { children } = props;

  return (
    <HeroBanner deco>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 2 }}>
                <div className={classes.text}>
                  <h4 className={text.title2}>Pellentesque habitant morbi tristique senectus</h4>
                  <h5 className={text.subtitle2}>
                    {'Multiple lines of text that form the lede,informing new readers quickly and efficiently about what\'s most interesting in this posts contents'}
                  </h5>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <div className={classes.img}>
                  {children}
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </HeroBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
