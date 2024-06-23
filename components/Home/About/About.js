import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import YouTube from 'react-youtube';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import yt from '~/youtube';
import { useText, useTextAlign } from '~/theme/common';
import Title from '../../Title';
import useStyles from './about-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('fintech-landing.mainfeature_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="rP_UAPcIG4I"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.deco}>
              <svg width="530px" height="534px" viewBox="0 0 530 534" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="deco-about" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Deco">
                    <path d="M530,133 C529.998175,206.336568 470.484102,265.797961 397,266 L397,133 L530,133 Z" id="primary-light" className={classes.primaryLightBg} />
                    <path d="M530,0 C456.515898,0.200218968 397,59.6688928 397,132.99636 L397,133 L530,133 L530,0 Z" id="secondary-light" className={classes.secondaryLightBg} />
                    <path d="M133,133 C59.6615934,133.001825 0.200219516,192.515898 0,266 L133,266 L133,133 Z" id="secondary-main" className={classes.secondaryMainBg} />
                    <path d="M133,397 C59.6615934,396.997992 0.200219516,337.4839 0,264 L133,264 L133,397 Z" id="primary-light2" className={classes.primaryLightBg} />
                    <path d="M520,388 C519.997996,307.495017 454.666758,242.221787 374,242 L374,388 L520,388 Z" id="primary-main" className={classes.primaryMainBg} />
                    <path d="M374,388 C374.002004,468.506423 439.333242,533.779611 520,534 L520,388 L374,388 Z" id="primary-light3" className={classes.primaryLightBg} transform="translate(447.000000, 461.000000) scale(-1, 1) translate(-447.000000, -461.000000) " />
                  </g>
                </g>
              </svg>
            </div>
            <div className={classes.counter}>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={-80}
                delay={400}
                duration={0.5}
              >
                <div className={classes.lower}>
                  <Paper className={cx(classes.paper, classes.pie2, classes.accent)}>
                    <span className="ion-person-stalker" />
                    <h6 className={classes.title}>
                      +600K
                    </h6>
                    <Typography display="block">
                      {t('fintech-landing.about_registered')}
                    </Typography>
                  </Paper>
                  <Paper className={cx(classes.paper, classes.pie3, classes.primary)}>
                    <span className="ion-android-home" />
                    <h6 className={classes.title}>
                      +200K
                    </h6>
                    <Typography display="block">
                      {t('fintech-landing.about_merchant')}
                    </Typography>
                  </Paper>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={-80}
                delay={200}
                duration={0.5}
              >
                <div className={classes.higher}>
                  <Paper className={cx(classes.paper, classes.pie2, classes.primary)}>
                    <span className="ion-briefcase" />
                    <h6 className={classes.title}>
                      +20M
                    </h6>
                    <Typography display="block">
                      {t('fintech-landing.about_deposit')}
                    </Typography>
                  </Paper>
                  <Paper className={cx(classes.paper, classes.pie4, classes.secondary)}>
                    <span className="ion-ios-pricetag" />
                    <h6 className={classes.title}>
                      +50M
                    </h6>
                    <Typography display="block">
                      {t('fintech-landing.about_discount')}
                    </Typography>
                  </Paper>
                </div>
              </ScrollAnimation>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Title text={t('fintech-landing.about_title')} align={isMobile ? 'center' : 'left'} />
            <p className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
              {t('fintech-landing.about_subtitle')}
            </p>
            <Paper className={classes.video}>
              <figure>
                <img src={imgAPI.fintech[18]} alt="cover" />
              </figure>
              <IconButton className={classes.playBtn} onClick={handleClickOpen} size="large">
                <span className="ion-ios-play-outline" />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {

};

export default MainFeature;
