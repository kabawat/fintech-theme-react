import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const sliderStyle = makeStyles({ uniqId: 'slider_banner' })((theme, _params, classes) => ({
  bannerWrap: {
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      bottom: 25
    }
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    [theme.breakpoints.up('md')]: {
      height: 600,
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 10, 0)
    },
    '& img': {
      margin: '0 auto',
      maxHeight: 350,
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.down('lg')]: {
        margin: `${theme.spacing(4)} auto 0`
      }
    },
    [`&.${classes.centerContent}`]: {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.between('md', 'xl')]: {
      float: 'left',
      right: theme.spacing(-5)
    },
    [theme.breakpoints.down('md')]: {
      right: 0
    },
    [theme.breakpoints.down('sm')]: {
      right: 'auto',
      left: -80
    }
  },
  imgSlide2: {
    [theme.breakpoints.between('md', 'xl')]: {
      float: 'right'
    }
  },
  carousel: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      zIndex: 5
    },
    '& > div': {
      marginBottom: 0
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: -100
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? -260 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -260,
    paddingTop: 20,
    '& img': {
      maxHeight: 320,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  deco: {
    position: 'absolute',
    top: 0,
    left: -180,
    display: 'flex',
    width: 828,
    height: 324,
    opacity: theme.palette.mode === 'dark' ? 0.2 : 0.5,
    '& > div': {
      position: 'relative',
      flex: 1
    },
  },
  round: {
    width: 176,
    height: 176,
    position: 'absolute',
    top: -10,
    left: 130,
    borderRadius: '50%'
  },
  leaf: {
    width: 192,
    height: 192,
    position: 'absolute',
    top: 80
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
  },
  decoRight: {
    [`& .${classes.leaf}`]: {
      right: -60,
      borderRadius: theme.pie[3],
      background: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    },
    [`& .${classes.round}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    },
    [`& .${classes.land}`]: {
      left: 0,
      borderRadius: theme.pie[2],
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    }
  },
  slideNavGroup: {
    position: 'relative',
    zIndex: 20,
  },
  cur: {},
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    direction: 'ltr',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  button: {
    marginRight: theme.spacing(3)
  },
  btnArea: {
    [`& .${classes.button}`]: {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 300,
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  textBtn: {
    padding: theme.spacing(1, 0),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3)
    },
  },
  containedBtn: {
    [theme.breakpoints.up('sm')]: {
      width: 200
    }
  },
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1080,
    margin: '0 auto',
  },
  active: {},
  btnNav: {
    padding: theme.spacing(2),
    textTransform: 'none',
    height: 'auto',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    borderRadius: theme.rounded.small,
    '& strong': {
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
      background: alpha(theme.palette.text.primary, 0.08)
    },
    [`&.${classes.active}`]: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      '& strong': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
      },
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
