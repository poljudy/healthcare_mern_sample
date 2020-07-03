import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.dark
    },
    tabs: {
      // color: 'pink',
      alignSelf: 'center',
      fontFamily: "whitney",
      color: theme.palette.primary.dark,
      maxWidth: '100%'
  
    },
    theming: {
      color: theme.palette.primary.dark
    },
    h1theme: {
      color: theme.palette.secondary.dark,
      paddingLeft: 40,
      margin: 20,
      marginTop: 40,
      textAlign: 'center',
      padding: 10,
      [theme.breakpoints.down('md')]: {
        fontSize: 50,
      }
    },
    secondaryheader: {
      textAlign: 'center',
      
    }
  }));


  const Success =props => {
    const classes = useStyles();

return(
    <div className={classes.root}>
    <Typography variant="h1" component="h2" className={classes.h1theme}>
  Thank you for making a payment, please check your email for reciept,  the charge will appear as CPC Account Payment on your credit card statement.
</Typography>
{/* <Typography variant="h1" component="h2" className={classes.h1theme}>
  Thank you for making a payment, please check your email for reciept.
</Typography> */}
</div>
)




  }
  export default Success;