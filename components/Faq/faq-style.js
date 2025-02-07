import { makeStyles } from 'tss-react/mui';

const faqStyles = makeStyles({ uniqId: 'faq' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    backgroundSize: '100%',
    [theme.breakpoints.up('xl')]: {
      paddingBottom: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  icon: {},
  content: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(4, 6),
    width: 450,
    '& img': {
      display: 'block',
      width: '100%',
      margin: '0 auto'
    }
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  accordion: {
    position: 'relative',
    zIndex: 1,
    [`& .${classes.item}`]: {
      '&:last-child': {
        marginBottom: 0
      }
    }
  },
  paper: {
    border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  expanded: {
    background: theme.palette.secondary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      [theme.breakpoints.up('sm')]: {
        fontSize: 18
      }
    }
  },
  topicList: {
    padding: 0,
    '& li': {
      padding: theme.spacing(2, 0),
      borderBottom: `1px solid ${theme.palette.divider}`,
      listStyle: 'none',
      '& a': {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default faqStyles;
