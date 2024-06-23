import { makeStyles } from 'tss-react/mui';
import { darken, lighten } from '@mui/material/styles';

const footerStyles = makeStyles({ uniqId: 'footer_extend' })((theme, _params, classes) => ({
  footerCounter: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
  },
  container: {},
  deco: {
    position: 'absolute',
    top: -225,
    left: 0,
    width: '100%',
    opacity: 0.5,
    direction: 'ltr',
    '& img': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    [`& .${classes.container}`]: {
      position: 'relative'
    },
    '& figure': {
      height: 130,
      width: 340,
      top: 80,
      overflow: 'hidden',
      position: 'absolute',
      '& img': {
        width: '100%'
      }
    }
  },
  decoMain: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  decoLeft: {
    width: 225,
    height: 225,
    background: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    borderRadius: theme.pie[2]
  },
  decoRight: {
    width: 173,
    height: 173,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    borderRadius: theme.pie[1],
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      left: -100,
      bottom: 0,
      width: 100,
      height: 100,
      borderRadius: theme.pie[2],
      background: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light
    }
  },
  decoFooter: {
    width: 340,
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  decoTop: {
    width: '100%',
    height: '100%',
    borderRadius: theme.pie[3],
    background: theme.palette.mode === 'dark' ? darken(theme.palette.secondary.dark, 0.5) : lighten(theme.palette.secondary.light, 0.5),
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  decoBottom: {
    width: '100%',
    height: '100%',
    borderRadius: theme.pie[2],
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : lighten(theme.palette.primary.light, 0.5),
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',
    zIndex: 1,
    '& h4': {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
  footerContainer: {
    position: 'relative',
    background: theme.palette.mode === 'dark' ? darken(theme.palette.secondary.dark, 0.5) : lighten(theme.palette.secondary.light, 0.5),
  },
  counter: {
    paddingBottom: theme.spacing(10),
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 1100,
      height: 1100,
      borderRadius: '50%',
      left: '50%',
      opacity: 0.5,
      transform: 'translateX(-50%)',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      top: -400,
      [theme.breakpoints.down('sm')]: {
        top: -280
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
