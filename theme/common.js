import { makeStyles } from 'tss-react/mui';

const sectionMargin = margin => (margin * 20);
const titleStyle = {
  fontSize: 48,
  lineHeight: '62px',
  textTransform: 'capitalize',
  fontWeight: 700,
  marginBottom: 40,
  position: 'relative'
};

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useSpacing = makeStyles({ uniqId: 'spacing' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    '& ul[class="slick-dots"]': {
      '& li': {
        margin: 1,
        '& button:before': {
          borderRadius: '50%',
          color: 'transparent !important',
          width: 10,
          height: 10,
          border: `2px solid ${theme.palette.primary.main}`,
          opacity: 0.5,
          transition: 'all 0.3s ease'
        },
        '&[class="slick-active"]': {
          '& button:before': {
            width: 20,
            height: 20,
            top: -5,
            left: -5,
            opacity: 1,
            background: theme.palette.primary.main
          }
        }
      }
    }
  },
  colouredPage: {
    position: 'relative',
    overflow: 'hidden',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(4)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(4)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(4),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(2.4)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(4),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(2.4)
    }
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  },
  containerGeneral: {
    position: 'relative',
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32
    }
  },
  containerFront: {
    position: 'relative',
    zIndex: 1
  },
  fullScreenContainer: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden'
  },
  maintenanceIcon: {
    margin: theme.spacing(3),
    width: 100,
    height: 100,
    '& svg': {
      width: 50,
      height: 50
    },
  },
  primaryIcon: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  secondaryIcon: {
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
  accentIcon: {
    background: theme.palette.accent.light,
    color: theme.palette.accent.dark,
  },
  fb: {
    color: '#3f51b5'
  },
  ig: {
    color: '#9c27b0'
  },
  tw: {
    color: '#2196f3'
  },
  li: {
    color: '#2196f3'
  },
  btnNotify: {
    minWidth: 120,
    margin: 4
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const usePopup = makeStyles({ uniqId: 'popup' })(theme => ({
  appBar: {
    position: 'relative',
    '& button': {
      color: theme.palette.common.white
    }
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: theme.palette.common.white
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useTextAlign = makeStyles({ uniqId: 'text_align' })({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFloat = makeStyles({ uniqId: 'float' })({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useText = makeStyles({ uniqId: 'text' })(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    },
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 14,
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px',
    },
  },
  titlePrimary: {
    ...titleStyle,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
  titleSecondary: {
    ...titleStyle,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  textPrimary: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
  textSecondary: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  },
  accentColor: {
    color: theme.palette.accent.main
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  regular: {
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useHidden = makeStyles({ uniqId: 'hidden' })(theme => ({
  lgDown: {
    [theme.breakpoints.down('xl')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlexBox = makeStyles({ uniqId: 'flex' })(() => ({
  justifyStart: {
    justifyContent: 'flex-star'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-star'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
}));

// TODO jss-to-tss-react codemod: Unable to handle style definition reliably. Unsupported arrow function syntax.
// Unexpected value type of ConditionalExpression.
// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlipRtl = makeStyles({ uniqId: 'float' })(theme => ({
  transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
}));
