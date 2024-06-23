import { makeStyles } from 'tss-react/mui';

const promoCardStyle = makeStyles({ uniqId: 'promo_card' })((theme, _params, classes) => ({
  card: {
    '& figure': {
      margin: 0
    }
  },
  promoCard: {
    maxWidth: 300,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 360
    },
    [`& .${classes.card}`]: {
      borderRadius: '40px 10px 40px 40px !important',
      overflow: 'hidden',
      '& figure': {
        borderBottomRightRadius: 100,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: 190,
        '& img': {
          width: '100%',
          height: 'auto',
          minHeight: '100%'
        }
      }
    }
  },
  property: {
    padding: theme.spacing(2),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 4, 4)
    },
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    paddingBottom: theme.spacing(2),
  },
  dateLine: {
    marginTop: 1,
    color: theme.palette.text.secondary
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default promoCardStyle;
