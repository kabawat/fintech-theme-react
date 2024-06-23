import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../../Title';
import useStyles from './payment-style';

function PaymentStep() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const imgSlider = [
    imgAPI.fintech[19],
    imgAPI.fintech[20],
    imgAPI.fintech[21],
    imgAPI.fintech[22],
    imgAPI.fintech[23],
    imgAPI.fintech[24]
  ];

  const slickOptions = {
    dots: true,
    arrows: false,
    speed: 800,
    infinity: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.wrapper}>
          <div className={classes.desc}>
            <Title
              caption={t('fintech-landing.accept_title')}
              text={t('fintech-landing.accept_title')}
              align="center"
              dark
            />
            <p className={text.subtitle2}>
              {t('fintech-landing.benefit_desc')}
            </p>
            <div className={classes.decoBg}>
              <svg width="1050px" height="642px" viewBox="0 0 1050 642" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="deco-screen" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="artwork">
                    <path d="M767,158 C837.170772,158.182154 894,212.285233 894,278.996688 L894,279 L767,279 L767,158 Z" className={classes.primaryMain} />
                    <path d="M767,279 C767.001743,345.719735 823.830971,399.81619 894,400 L894,279 L767,279 Z" className={classes.primaryMain} />
                    <path d="M1021,279 C1020.99826,345.719735 964.169029,399.81619 894,400 L894,279 L1021,279 Z" className={classes.secondaryMain} />
                    <path d="M1021,158 C950.830971,158.182154 894,212.285233 894,278.996688 L894,279 L1021,279 L1021,158 Z" className={classes.secondaryDark} />
                    <path d="M767,521 C767.001743,454.280117 823.830971,400.18381 894,400 L894,521 L767,521 Z" className={classes.primaryLight} />
                    <path d="M1021,521 C1020.99826,454.280117 964.169029,400.18381 894,400 L894,521 L1021,521 Z" className={classes.primaryMain} />
                    <path d="M894,521 C894.001743,587.721076 950.830971,641.817349 1021,642 L1021,521 L894,521 Z" className={classes.primaryMain} />
                    <path d="M156.173429,15.349404 C164.263917,29.8035619 159.106287,48.0824621 144.65279,56.172915 C130.19549,64.2651789 111.917867,59.1048553 103.827016,44.649792 C95.7354409,30.1956342 100.893795,11.9185449 115.351096,3.82628103 C129.804321,-4.2641719 148.081944,0.894340731 156.173429,15.349404 Z" className={classes.accentMain} transform="translate(130.000000, 30.000000) scale(-1, 1) translate(-130.000000, -30.000000) " />
                    <path d="M127,92 C126.808812,158.855618 70.022547,213 0.00399756396,213 L0,213 L0,92 L127,92 Z" className={classes.secondaryMain} transform="translate(63.500000, 152.500000) scale(-1, 1) translate(-63.500000, -152.500000) " />
                    <path d="M254,92 C183.970093,92.0016605 127.191187,146.146043 127,213 L254,213 L254,92 Z" className={classes.secondaryDark} transform="translate(190.500000, 152.500000) scale(-1, 1) translate(-190.500000, -152.500000) " />
                    <path d="M254,334 C183.970093,333.998173 127.191187,279.853774 127,213 L254,213 L254,334 Z" className={classes.primaryLight} transform="translate(190.500000, 273.500000) scale(-1, 1) translate(-190.500000, -273.500000) " />
                    <path d="M177,334 C176.808812,267.145894 120.022547,213 50.0039976,213 L50,213 L50,334 L177,334 Z" className={classes.primaryDark} transform="translate(113.500000, 273.500000) scale(-1, 1) translate(-113.500000, -273.500000) " />
                    <path d="M21.0274,417.7899 C18.2812,417.7899 16.0549,415.5627 16.0549,412.8165 C16.0549,410.0703 18.2812,407.8443 21.0274,407.8443 C23.7736,407.8443 26,410.0703 26,412.8165 C26,415.5627 23.7736,417.7899 21.0274,417.7899 Z" className={classes.primaryMain} transform="translate(21.027450, 412.817100) rotate(180.000000) translate(-21.027450, -412.817100) " />
                    <path d="M21.0274,393.8678 C18.2812,393.8678 16.0549,391.6409 16.0549,388.8955 C16.0549,386.1482 18.2812,383.9221 21.0274,383.9221 C23.7736,383.9221 26,386.1482 26,388.8955 C26,391.6409 23.7736,393.8678 21.0274,393.8678 Z" className={classes.primaryMain} transform="translate(21.027450, 388.894950) rotate(180.000000) translate(-21.027450, -388.894950) " />
                    <path d="M21.0274,369.9459 C18.2812,369.9459 16.0549,367.7196 16.0549,364.9734 C16.0549,362.2269 18.2812,360 21.0274,360 C23.7736,360 26,362.2269 26,364.9734 C26,367.7196 23.7736,369.9459 21.0274,369.9459 Z" className={classes.primaryMain} transform="translate(21.027450, 364.972950) rotate(180.000000) translate(-21.027450, -364.972950) " />
                    <polygon className={classes.primaryDark} transform="translate(92.767050, 375.697900) scale(-1, -1) rotate(-90.000000) translate(-92.767050, -375.697900) " points="50.53395 417.93085 135.00015 417.93085 135.00015 333.46495 50.53395 333.46495" />
                    <path d="M1044.9725,209.9456 C1042.2263,209.9456 1040,207.7184 1040,204.9722 C1040,202.226 1042.2263,200 1044.9725,200 C1047.7187,200 1049.9451,202.226 1049.9451,204.9722 C1049.9451,207.7184 1047.7187,209.9456 1044.9725,209.9456 Z" className={classes.secondaryDark} />
                    <path d="M1044.9725,233.8678 C1042.2263,233.8678 1040,231.6409 1040,228.8955 C1040,226.1482 1042.2263,223.9221 1044.9725,223.9221 C1047.7187,223.9221 1049.9451,226.1482 1049.9451,228.8955 C1049.9451,231.6409 1047.7187,233.8678 1044.9725,233.8678 Z" className={classes.secondaryDark} />
                    <path d="M1044.9725,257.7899 C1042.2263,257.7899 1040,255.5636 1040,252.8174 C1040,250.0709 1042.2263,247.844 1044.9725,247.844 C1047.7187,247.844 1049.9451,250.0709 1049.9451,252.8174 C1049.9451,255.5636 1047.7187,257.7899 1044.9725,257.7899 Z" className={classes.secondaryDark} />
                    <path d="M220,418 L50,418 C50,511.88835 126.11049,588 220,588 L220,418 Z" className={classes.secondaryDark} />
                    <path d="M390,418 L390,588 L560,588 C560,494.11165 483.889849,418 390,418 Z" className={classes.primaryDark} />
                    <polygon className={classes.primaryDark} points="220 588 390 588 390 418 220 418" />
                    <path d="M220,418 L50,418 C50,464.862003 69.0266665,507.289154 99.7901508,538 L220,418 Z" fill="#FFF000" id="Fill-5" />
                    <path d="M390,418 L390,588 L510,467.791064 C479.291766,437.027761 436.864012,418 390,418 Z" className={classes.primaryDark} />
                    <path d="M810,545.4659 L894.4648,545.4659 L894.4648,461 C847.8164,461 810,498.8167 810,545.4659 Z" className={classes.primaryMain} />
                    <path d="M919.579024,510.744989 C931.04055,531.221713 923.733907,557.116821 903.258119,568.578296 C882.776944,580.042337 856.883645,572.731878 845.421606,552.253872 C833.958541,531.777148 841.26621,505.884605 861.747385,494.420565 C882.222788,482.95909 908.116087,490.266983 919.579024,510.744989 Z" className={classes.accentMain} />
                  </g>
                </g>
              </svg>
            </div>
            <div className={classes.carousel}>
              <Carousel
                {...slickOptions}
                className={classes.slider}
                ref={slider}
              >
                {imgSlider.map((item, index) => (
                  <div className={classes.slide} key={index.toString()}>
                    <div className={classes.paper}>
                      <figure>
                        <img src={item} alt="screen" />
                      </figure>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

PaymentStep.propTypes = {

};

export default PaymentStep;
