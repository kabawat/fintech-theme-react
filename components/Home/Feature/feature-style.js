import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  moreFeature: {
    position: 'relative',
    zIndex: 3,
    '& figure': {
      margin: 0
    },
  },
  last: {},
  item: {
    position: 'relative',
    padding: theme.spacing(0, 1, 10),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3, 10),
    },
    '& p': {
      marginBottom: theme.spacing(3),
    },
    [`&.${classes.last}`]: {
      paddingBottom: 0
    }
  },
  text: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      margin: 0
    },
    '& > span': {
      position: 'absolute',
      color: theme.palette.text.disabled,
      top: -10,
      left: 7,
      fontSize: 38,
      zIndex: 2
    }
  },
  textCenter: {
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  horizontal: {},
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxHeight: 240,
      [theme.breakpoints.up('lg')]: {
        maxHeight: 340
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%'
      }
    },
    [`&.${classes.horizontal}`]: {
      '& img': {
        maxHeight: 335,
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
