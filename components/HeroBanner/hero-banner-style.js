import { makeStyles } from 'tss-react/mui';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })((theme, _params, classes) => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  deco: {
    position: 'absolute',
    top: -100,
    right: 0,
    display: 'flex',
    width: 480,
    height: '100%',
    opacity: theme.palette.mode === 'dark' ? 0.2 : 0.5,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& > div': {
      position: 'relative',
      flex: 1
    },
  },
  round: {
    width: 176,
    height: 176,
    position: 'absolute',
    top: 180,
    left: '30%',
    borderRadius: '50%'
  },
  leaf: {
    width: 192,
    height: 192,
    position: 'absolute',
    top: 260
  },
  land: {
    width: 350,
    height: 350,
    position: 'absolute',
    bottom: 0
  },
  decoLeft: {
    [`& .${classes.leaf}`]: {
      left: -60,
      borderRadius: theme.pie[4],
      background: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    },
    [`& .${classes.round}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    [`& .${classes.land}`]: {
      right: 0,
      borderRadius: theme.pie[1],
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
