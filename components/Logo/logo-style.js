import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })(theme => ({
  logo: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
    '& img': {
      transition: 'transform ease-out 0.3s',
      width: 54,
      height: 54,
    }
  },
  landscape: {
    alignItems: 'center',
    position: 'relative',
    top: -2,
    '& img': {
      marginRight: theme.spacing(1)
    }
  },
  portrait: {
    display: 'block',
    margin: '0 auto 8px',
    '& img': {
      margin: '0 auto',
      display: 'block'
    }
  },
  small: {
    fontSize: 16,
    '& img': {
      maxWidth: 34,
      height: 34
    }
  },
  medium: {
    fontSize: 18,
    '& img': {
      maxWidth: 54,
      height: 54,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 34,
        height: 34
      }
    }
  },
  large: {
    fontSize: 28,
    '& img': {
      maxWidth: 54,
      height: 54
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
