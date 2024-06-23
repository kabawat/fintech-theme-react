import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Container from '@mui/material/Container';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing, useText } from '~/theme/common';
import Header from '~/components/Header';
import Counter from '~/components/Counter';
import Banner from '~/components/About/Banner';
import PhotoSlider from '~/components/About/PhotoSlider';
import TeamGrid from '~/components/About/TeamGrid';
import FooterExtend from '~/components/Footer/FooterExtend';
import Footer from '~/components/Footer';
import Title from '~/components/Title';
import brand from '~/public/text/brand';

function Team(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

   // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useSpacing();
  const { classes: text } = useText();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.fintech.name + ' - Team' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerFront}>
          <Banner>
            <img
              src={imgAPI.ui[5]}
              data-2d={imgAPI.ui[4]}
              data-3d={imgAPI.ui[5]}
              className="img-2d3d"
              alt="services 3d"
            />
          </Banner>
          <Counter />
          <div className={classes.spaceTop}>
            <Container>
              <Title align={isMobile ? 'center' : 'left'} text={t('about_team')} />
              <p className={text.subtitle2}>
                Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <TeamGrid />
            </Container>
          </div>
          <div className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <PhotoSlider />
          </div>
        </div>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Team.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Team;
