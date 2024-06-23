import { makeStyles } from 'tss-react/mui';

const aboutStyles = makeStyles({ uniqId: 'about' })((theme, _params, classes) => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  video: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(6, 0, 2),
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%',
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  featureWrap: {
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeightMedium
  },
  playBtn: {
    position: 'absolute',
    width: 90,
    height: 90,
    top: '50%',
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    left: '50%',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    '& span': {
      '&:before': {
        fontSize: 60,
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  deco: {
    position: 'absolute',
    top: theme.spacing(2),
    right: 0,
    width: '100%',
    '& svg': {
      width: '100%'
    },
  },
  counter: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      paddingRight: theme.spacing(8),
    },
    '& > *': {
      [theme.breakpoints.down('sm')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(-3)
    }
  },
  pie1: {},
  pie2: {},
  pie3: {},
  pie4: {},
  paper: {
    position: 'relative',
    height: 193,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    borderRadius: 0,
    [`&.${classes.pie1}`]: {
      borderTopLeftRadius: 100,
    },
    [`&.${classes.pie2}`]: {
      borderTopRightRadius: 100,
    },
    [`&.${classes.pie3}`]: {
      borderBottomLeftRadius: 100,
    },
    [`&.${classes.pie4}`]: {
      borderBottomLeftRadius: 100,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 5),
      marginRight: theme.spacing(4),
      width: 193,
    },
    '& span': {
      fontSize: 64,
      lineHeight: '64px',
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  accent: {
    backgroundColor: theme.palette.accent.main,
  },
  primaryLightBg: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  secondaryLightBg: {
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  primaryMainBg: {
    fill: theme.palette.primary.main
  },
  secondaryMainBg: {
    fill: theme.palette.secondary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
