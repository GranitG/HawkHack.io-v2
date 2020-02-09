import makeStyles from '@material-ui/core/styles/makeStyles';

const aboutStyles = makeStyles((theme) => ({
  section: {
    padding: '20px',
    minHeight: '100vh',
  },
  home: {
    display: 'flex',
    height: '80vh',
  },
  hr: {
    height: '2px',
    width: '200px',
    color: theme.palette.primary.main,
    backgroundColor: 'gray',
    border: 'none',
  },
  wrapper: {
    '@media (min-width: 276px)': {
      padding: '15px',
    },
    '@media (min-width: 576px)': {
      padding: '20px',
    },
    '@media (min-width: 768px)': {
      padding: '30px',
    },
    '@media (min-width: 992px)': {
      padding: '30px',
    },
    '@media (min-width: 1200px)': {
      padding: '30px',
    },
  },
  img: {
    minWidth: '100px',
    height: "auto",
    width: '100%',
    margin: 0,
    boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  border: {
    borderLeft: '5px solid red',
    borderRight: '5px solid red',
  },
  icons: {
    align: 'center',
  },
  whatsHawkhack: {
    // '@media (min-width: 276px)': {
    //   padding: '20px',
    // },
    // '@media (min-width: 576px)': {
    //   padding: '20px',
    // },
    // '@media (min-width: 768px)': {
    //   padding: '15px',
    // },
    // '@media (min-width: 992px)': {
    //   paddingTop: '20px',
    // },
    // '@media (min-width: 1200px)': {
    //   marginTop: 20,
    //   paddingTop: '20px',
    // },
    fontWeight: '300',
  },
  whatText: {
    '@media (min-width: 276px)': {
      fontSize: '1em',
      padding: 10,
    },
    '@media (min-width: 576px)': {
      fontSize: '1.5em',
      padding: 10,
    },
    '@media (min-width: 768px)': {
      fontSize: '1.5em',
    },
    '@media (min-width: 992px)': {
      fontSize: '1.5em',
    },
    '@media (min-width: 1200px)': {
      fontSize: '1.5em',
    },
    color: '#999',
    alignText: 'left',
  },
  iframe: {
    border: 0,
    boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
}));

export default aboutStyles;
