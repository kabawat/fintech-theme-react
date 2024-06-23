import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.root}>
        <div className={classes.bannerWrap}>
          <div className={classes.carousel}>
            <Carousel
              {...slickOptions}
              className={classes.slider}
              afterChange={handleAfterChange}
              ref={slider}
            >
              <div className={classes.slide} id="slide1">
                <div className={classes.inner}>
                  <div className={cx(classes.img, classes.backgroundBanner)}>
                    <div className={classes.deco}>
                      <div className={classes.decoLeft}>
                        <span className={classes.leaf} />
                        <span className={classes.land} />
                        <span className={classes.round} />
                      </div>
                      <div className={classes.decoRight}>
                        <span className={classes.leaf} />
                        <span className={classes.land} />
                        <span className={classes.round} />
                      </div>
                    </div>
                    <img
                      className="img-2d3d"
                      src={imgAPI.fintech[3]}
                      data-2d={imgAPI.fintech[2]}
                      data-3d={imgAPI.fintech[3]}
                      alt="background"
                    />
                  </div>
                  <Container>
                    <Grid container alignItems="center">
                      <Grid item md={6} lg={6} xs={12}>
                        <Box px={{ sm: 3 }} alignItems="center">
                          <div className={classes.text}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={cx(classes.button, classes.containedBtn)}>
                                {t('btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }}>
                          <div className={classes.img}>
                            <img
                              className={cx('img-2d3d', classes.imgSlide1)}
                              src={imgAPI.fintech[5]}
                              data-2d={imgAPI.fintech[4]}
                              data-3d={imgAPI.fintech[5]}
                              alt="banner 1 3D"
                            />
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
              <div className={classes.slide} id="slide2">
                <div className={classes.inner}>
                  <Container>
                    <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }}>
                          <div className={classes.img}>
                            <img
                              className={cx('img-2d3d', classes.imgSlide2)}
                              src={imgAPI.fintech[7]}
                              data-2d={imgAPI.fintech[6]}
                              data-3d={imgAPI.fintech[7]}
                              alt="banner 2 3D"
                            />
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }} alignItems="center">
                          <div className={classes.text}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={cx(classes.button, classes.containedBtn)}>
                                {t('btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
              <div className={cx(classes.slide, classes.centerContent)} id="slide3">
                <div className={classes.inner}>
                  <Container>
                    <Grid container justifyContent="flex-end">
                      <Grid item md={12} xs={12}>
                        <Box px={{ md: 12 }}>
                          <div className={cx(classes.text, align.textCenter)}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={cx(classes.button, classes.containedBtn)}>
                                {t('btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <div className={cx(classes.img, classes.hBanner)}>
                          <img
                            className="img-2d3d"
                            src={imgAPI.fintech[9]}
                            data-2d={imgAPI.fintech[8]}
                            data-3d={imgAPI.fintech[9]}
                            alt="banner 3 3D"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={classes.slideNavGroup}>
        <Hidden mdDown>
          <Container>
            <nav className={classes.slideNav}>
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
                onClick={() => gotoSlide(0)}
              >
                <strong>First Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
                onClick={() => gotoSlide(1)}
              >
                <strong>Second Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
                onClick={() => gotoSlide(2)}
              >
                <strong>Third Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
            </nav>
          </Container>
        </Hidden>
      </div>
    </div>
  );
}

export default BannerSlider;
