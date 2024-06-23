import { makeStyles } from 'tss-react/mui';

const merchantsStyle = makeStyles({ uniqId: 'merchant' })(theme => ({
  tabs: {
    position: 'relative',
    zIndex: 55,
  },
  tabMenu: {
    '& > div': {
      overflow: 'auto !important'
    }
  },
  tabContent: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 4, 0)
    },
    '& section': {
      position: 'relative',
      '& div': {
        overflow: 'visible'
      }
    }
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 5),
    borderBottom: '1px solid',
    borderColor: theme.palette.text.disabled,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  imgLogo: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4)
    },
    '& img': {
      width: '100%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default merchantsStyle;
