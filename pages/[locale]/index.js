import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import About from '~/components/Home/About';
import Feature from '~/components/Home/Feature';
import PaymentStep from '~/components/Home/PaymentStep';
import TopPromotions from '~/components/Home/TopPromotions';
import Testimonials from '~/components/Home/Testimonials';
import Merchants from '~/components/Home/Merchants';
import DownloadBanner from '~/components/Home/DownloadBanner';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import FooterExtend from '~/components/Footer/FooterExtend';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.fintech.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="about" className={classes.spaceTop}>
            <About />
          </section>
          <section id="feature" className={isDesktop ? classes.spaceTopShort : classes.spaceTop}>
            <Feature />
          </section>
          <section id="payment" className={isMobile ? classes.spaceTop : classes.spaceTopShort}>
            <PaymentStep />
          </section>
          <section id="promotions" className={classes.spaceTopShort}>
            <TopPromotions />
          </section>
          <section id="testimonials" className={isDesktop ? classes.spaceTopShort : classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="merchant" className={classes.spaceTop}>
            <Merchants />
          </section>
          <DownloadBanner />
        </main>
        <Hidden lgDown>
          <Corner />
        </Hidden>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
        <Hidden xlDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
