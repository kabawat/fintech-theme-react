import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      transition: 'all 0.3s ease-out',
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
