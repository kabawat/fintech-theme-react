import { makeStyles } from 'tss-react/mui';

const downloadStyles = makeStyles({ uniqId: 'download' })(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginBottom: 200
    }
  },
  paper: {
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    borderRadius: theme.rounded.medium,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    display: 'flex',
    position: 'relative',
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.up('sm')]: {
      height: 240,
      margin: theme.spacing(15, 5, 0)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h3': {
      fontSize: 36,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
      }
    }
  },
  phone: {
    border: '6px solid #303030',
    background: theme.palette.background.paper,
    overflow: 'hidden',
    borderRadius: theme.rounded.big,
    width: 174,
    height: 325,
    boxShadow: theme.shade.light,
    position: 'relative',
    top: -80,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& > span': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    '& img': {
      width: '100%'
    }
  },
  action: {
    flex: 1
  },
  btnArea: {
    marginTop: theme.spacing(4),
    display: 'flex',
    '& a': {
      display: 'block',
      flex: 1,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        margin: '0 2px',
      }
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  decoLeft: {
    position: 'absolute',
    left: 0,
    top: -130,
    [theme.breakpoints.up('sm')]: {
      top: -80,
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
  },
  decoRight: {
    position: 'absolute',
    right: -40,
    top: -36,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  primaryLight: {
    fill: theme.palette.primary.light
  },
  primaryMain: {
    fill: theme.palette.primary.main
  },
  primaryDark: {
    fill: theme.palette.primary.dark
  },
  secondaryMain: {
    fill: theme.palette.secondary.main
  },
  secondaryDark: {
    fill: theme.palette.secondary.dark
  },
  accentMain: {
    fill: theme.palette.accent.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default downloadStyles;
