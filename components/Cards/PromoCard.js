import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import useStyles from './promo-card-style';

export default function PromoCard(props) {
  const { classes } = useStyles();
  const {
    periode,
    title,
    img
  } = props;
  return (
    <div className={classes.promoCard}>
      <Card className={classes.card}>
        <figure>
          <img
            src={img}
            height="205px"
            alt="promotion"
          />
        </figure>
        <div className={classes.property}>
          <div className={classes.promoTitle}>
            {title}
          </div>
          <div className={classes.dateLine}>
            {periode}
          </div>
        </div>
      </Card>
    </div>
  );
}

PromoCard.propTypes = {
  periode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
