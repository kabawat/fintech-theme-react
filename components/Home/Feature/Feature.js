import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './feature-style';

function Feature() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={isMobile ? 2 : 6}>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <Title
                  text={t('fintech-landing.morefeature_title1')}
                  align={isMobile ? 'center' : 'left'}
                />
                <div className={isMobile ? align.textCenter : ''}>
                  <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('fintech-landing.morefeature_subtitle1')}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                delay={400}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[11]}
                    data-2d={imgAPI.fintech[10]}
                    data-3d={imgAPI.fintech[11]}
                    alt="feature"
                  />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={isMobile ? 2 : 6}
          >
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                offset={100}
                animateIn="fadeInLeftShort"
                delay={400}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[13]}
                    data-2d={imgAPI.fintech[12]}
                    data-3d={imgAPI.fintech[13]}
                    alt="feature"
                  />
                </figure>
              </ScrollAnimation>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box py={{ md: 3 }}>
                <div className={classes.text}>
                  <Title
                    text={t('fintech-landing.morefeature_title2')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <div className={isMobile ? align.textCenter : ''}>
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('fintech-landing.morefeature_subtitle2')}
                    </p>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <Grid container>
            <Grid item xs={12}>
              <div className={cx(classes.text, align.textCenter)}>
                <Title
                  text={t('fintech-landing.morefeature_title3')}
                  align="center"
                />
                <p className={cx(text.subtitle2, align.textCenter)}>
                  {t('fintech-landing.morefeature_subtitle3')}
                </p>
              </div>
              <ScrollAnimation
                animateOnce
                offset={100}
                animateIn="fadeInUpShort"
                delay={400}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[15]}
                    data-2d={imgAPI.fintech[14]}
                    data-3d={imgAPI.fintech[15]}
                    alt="feature"
                  />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Feature.propTypes = {

};

export default Feature;
