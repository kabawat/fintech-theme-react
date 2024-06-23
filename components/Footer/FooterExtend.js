import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Counter from '../CounterSingle';
import useStyles from './footer-extend-style';

function FooterExtend(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { withCounter, children } = props;
  const { t } = useTranslation('common');
  return (
    <div className={cx(classes.footerCounter, withCounter ? classes.withCounter : '')}>
      <span className={classes.round} />
      {withCounter && (
        <div className={classes.counter}>
          <Counter />
          <div className={classes.action}>
            <h4 className={text.title2}>
              {t('fintech-landing.footer_waiting')}
            </h4>
            <Button color="secondary" size="large" variant="contained">
              {t('fintech-landing.getstarted')}
            </Button>
          </div>
        </div>
      )}
      <div className={classes.footerContainer}>
        <div className={classes.deco}>
          {withCounter && (
            <Container className={classes.container}>
              <figure>
                <img
                  className="img-2d3d"
                  src={imgAPI.fintech[17]}
                  data-2d={imgAPI.fintech[16]}
                  data-3d={imgAPI.fintech[17]}
                  alt="feature"
                />
              </figure>
            </Container>
          )}
          <div className={classes.decoMain}>
            <div className={classes.decoLeft} />
            <div className={classes.decoRight} />
          </div>
        </div>
        {children}
        <div className={classes.decoFooter}>
          <span className={classes.decoBottom} />
          <span className={classes.decoTop} />
        </div>
      </div>
    </div>
  );
}

FooterExtend.propTypes = {
  withCounter: PropTypes.bool,
  children: PropTypes.node.isRequired,

};

FooterExtend.defaultProps = {
  withCounter: false
};

export default FooterExtend;
