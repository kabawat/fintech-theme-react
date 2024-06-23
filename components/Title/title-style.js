import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  deco: {
    borderRadius: theme.pie[2],
    width: 21,
    height: 21,
    position: 'relative',
    background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    '&:after': {
      content: '""',
      width: 30,
      height: 30,
      borderRadius: theme.pie[1],
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      position: 'absolute',
      bottom: 0,
      left: '100%'
    }
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
    [`& .${classes.deco}`]: {
      marginLeft: 'auto',
      marginRight: 30
    }
  },
  center: {
    textAlign: 'center',
    [`& .${classes.deco}`]: {
      marginLeft: 'calc(50% - 21px)',
    }
  },
  titleMain: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '36px',
      }
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
