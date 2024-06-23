import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import Title from '../../Title';
import useStyles from './merchants-style';

function Merchants() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation('common');

  const logos1 = [
    '/images/logos/architect.png',
    '/images/logos/cloud.png',
    '/images/logos/coin.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/saas.png',
    '/images/logos/agency-logo.png',
    '/images/logos/crypto-logo.png',
    '/images/logos/saas-logo.png',
    '/images/logos/cloud-logo.png',
    '/images/logos/fashion.png',
    '/images/logos/hosting-logo.png'
  ];
  const logos2 = [
    '/images/logos/agency-logo.png',
    '/images/logos/education-logo.png',
    '/images/logos/fashion-logo.png',
    '/images/logos/medical-logo.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/profile-logo.png',
    '/images/logos/starter.png',
    '/images/logos/coin.png',
    '/images/logos/profile.png',
    '/images/logos/saas.png',
    '/images/logos/agency.png'
  ];
  const logos3 = [
    '/images/logos/saas.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/profile-logo.png',
    '/images/logos/starter.png',
    '/images/logos/agency.png',
    '/images/logos/cloud-logo.png',
    '/images/logos/agency-logo.png',
    '/images/logos/mobile-logo.png',
    '/images/logos/fashion.png',
    '/images/logos/movie-logo.png',
    '/images/logos/education-logo.png'
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Title
          text={t('fintech-landing.partner_title')}
          align="center"
        />
        <div className={classes.tab}>
          <Box p={{ sm: 3 }}>
            <Grid container justifyContent="center">
              <Grid item md={10} xs={12}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered={!isMobile}
                  className={classes.tabMenu}
                  classes={{
                    indicator: classes.indicator
                  }}
                >
                  <Tab classes={{ root: classes.tabLabel }} label="Online" />
                  <Tab classes={{ root: classes.tabLabel }} label="Offline" />
                  <Tab classes={{ root: classes.tabLabel }} label="Channel" />
                </Tabs>
                <div className={classes.tabContent}>
                  {value === 0 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos1.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 1 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos2.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 2 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos3.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

Merchants.propTypes = {

};

export default Merchants;
