import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import ContactUs from '../HomeComponent/ContactUs'
import ContactUs from './ContactUs';
import Box from '@material-ui/core/Box';
// import { colors } from '@material-ui/core';
// import theme from "../Material-ui/Theme";
// import theme from "../theme/Theme";
// function Copyright() {
//   return (
//     <>
//     <Typography variant="body2" color="textSecondary" align="center">
    
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//     </>
//   );
// }

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(8),
    // padding: theme.spacing(6, 0),
    paddingTop: '8px',
    paddingBottom: '8px',
    [theme.breakpoints.down('md')]: {
      // fontSize: 18,
    backgroundColor: theme.palette.secondary.dark,
    padding: 'auto',
    marginTop: theme.spacing(2),
  }
  },
  box: {
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.main,
  borderColor:"grey.500",
  [theme.breakpoints.down('md')]: {
    borderColor:"none",
  }

//   [theme.breakpoints.down('md')]: {
//     // fontSize: 18,
//   backgroundColor: 'grey.500',
//   // padding: 'auto',
//   // marginTop: theme.spacing(2),
// }
  }
}));
const defaultProps = {
  // bgcolor: 'theme.palette.secondary.dark',
  m: 1,
  border: 1,
  // style: { width: '5rem', height: '5rem' },
};
export default function Footer(props) {
  const classes = useStyles();
  // const { description, title, responsive } = props;




  return (
    <footer className={classes.footer}>
      {/* <Container maxWidth="lg"> */}
        {/* <Typography variant="h6" align="center" gutterBottom>
          {title}
          <ContactUs />
        </Typography> */}
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p"> */}
          {/* {description} */}
          {/* <Box className={classes.box} clone>
          <ContactUs />
          </Box> */}
          <Box {...defaultProps} className={classes.box}>
          <ContactUs />
          </Box>
        {/* </Typography> */}
        {/* <Copyright /> */}
      {/* </Container> */}
    </footer>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string,
// };