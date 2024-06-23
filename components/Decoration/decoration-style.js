import { makeStyles } from 'tss-react/mui';

const decorationStyles = makeStyles({ uniqId: 'decoration' })(theme => ({
  deco: {
    position: 'absolute',
    left: 0,
    overflow: 'hidden',
    minWidth: 700,
    width: '100%',
    height: '100%',
    bottom: 0,
    opacity: 0.25,
    direction: 'ltr',
    '& figure': {
      height: 130,
      width: 340,
      top: 94,
      overflow: 'hidden',
      position: 'absolute',
      '& img': {
        width: '100%'
      }
    }
  },
  decoMain: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  decoLeft: {
    width: 612,
    height: 612,
    borderRadius: '50%',
    bottom: -400,
    position: 'relative',
    background: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 100,
      height: 100,
      background: theme.palette.mode === 'dark' ? theme.palette.accent.main : theme.palette.accent.light,
      borderRadius: theme.pie[2],
      top: 110,
      left: 0
    }
  },
  decoRight: {
    width: 173,
    height: 173,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    borderRadius: theme.pie[1],
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: -100,
      bottom: 0,
      width: 100,
      height: 100,
      borderRadius: theme.pie[2],
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
