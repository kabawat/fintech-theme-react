import { makeStyles } from 'tss-react/mui';

const testiCardStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  content: {},
  testimonial: {
    maxWidth: 540,
    margin: '0 auto',
    borderRadius: '100px 30px 30px 30px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: 240,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    '& figure': {
      width: '60%',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    },
    [`& .${classes.content}`]: {
      position: 'relative',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      '& span': {
        height: 80,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        padding: theme.spacing(0, 1)
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  deco: {
    position: 'absolute',
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    height: 428,
    width: '100%',
    top: -60,
    [theme.breakpoints.up('sm')]: {
      width: 428,
      borderRadius: '50%',
      left: -150
    },
    '&:after': {
      content: '""',
      width: 28,
      height: 28,
      position: 'absolute',
      top: 80,
      right: 25,
      borderRadius: '50%',
      background: theme.palette.accent.main,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&:before': {
      content: '""',
      width: 82,
      height: 82,
      position: 'absolute',
      bottom: 30,
      left: 120,
      borderRadius: '50%',
      background: theme.palette.secondary.main,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  text: {
    flex: 1,
    color: theme.palette.common.white,
    zIndex: 2,
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0, 4, 3),
      width: '40%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiCardStyles;
