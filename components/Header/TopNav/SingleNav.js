import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import useStyles from '../header-style';
import navMenu from '../data/single';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function MixedNav(props) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const {
    menuPrimary,
    singleNav,
  } = props;

  return (
    <Scrollspy
      items={navMenu}
      currentClassName="active"
      className={classes.scrollActiveNav}
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          {singleNav ? (
            <Button component={LinkBtn} offset={() => 30} href={item.url}>
              {t('fintech-landing.header_' + item.name)}
            </Button>
          ) : (
            <Button href={'/' + item.url}>
              {t('fintech-landing.header_' + item.name)}
            </Button>
          )}
        </li>
      ))}
      <li>
        <Button href="#!">
          {t('header_sample_page')}
        </Button>
      </li>
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
};

MixedNav.defaultProps = {
  singleNav: false
};

export default MixedNav;
