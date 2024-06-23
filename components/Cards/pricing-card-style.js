import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'pricing_card' })((theme, _params, classes) => ({
  primaryColor: {},
  secondaryColor: {},
  cardHeader: {
    padding: 0,
    textTransform: 'uppercase',
    [`&.${classes.primaryColor}`]: {
      color: theme.palette.primary.main,
    },
    [`&.${classes.secondaryColor}`]: {
      color: theme.palette.secondary.main,
    },
    '& span': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16,
    },
  },
  bordered: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  star: {
    fill: theme.palette.common.white,
  },
  hasBg: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.rounded.medium,
    [`& .${classes.cardHeader} span`]: {
      color: theme.palette.common.white,
    },
    [`& .${classes.cardPricing} h2`]: {
      color: theme.palette.common.white,
    },
  },
  priceHeader: {
    padding: theme.spacing(5, 2),
    margin: 4
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    '& h2': {
      color: theme.palette.text.secondary
    }
  },
  cardContent: {
    padding: theme.spacing(1, 2),
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      padding: theme.spacing(1, 0),
      margin: theme.spacing(1, 0),
      color: theme.palette.text.secondary,
      borderBottom: `2px dashed ${theme.palette.divider}`,
      '&:last-child': {
        border: 'none'
      }
    }
  },
  btnArea: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    padding: theme.spacing(1.5, 3),
    display: 'block',
    '& button, a': {
      margin: '0 !important'
    },
    '& p': {
      position: 'relative',
      fontSize: 14
    },
    [`&.${classes.primaryColor}`]: {
      background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.3) : alpha(theme.palette.primary.light, 0.3)
    },
    [`&.${classes.secondaryColor}`]: {
      background: theme.palette.mode === 'dark' ? alpha(theme.palette.secondary.dark, 0.3) : alpha(theme.palette.secondary.light, 0.3)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
