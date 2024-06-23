import { makeStyles } from 'tss-react/mui';

const topPromotionsStyle = makeStyles({ uniqId: 'promotion' })(theme => ({
  root: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 0)
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 5,
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      marginBottom: 20,
    },
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      bottom: theme.spacing(-6),
      '& li': {
        width: 15,
        height: 15,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        margin: '0 4px',
        '&[class="slick-active"]': {
          background: theme.palette.primary.main,
        },
        '& button:before': {
          display: 'none'
        }
      }
    }
  },
  item: {
    padding: theme.spacing(),
    direction: 'ltr',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      margin: '0 auto'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default topPromotionsStyle;
