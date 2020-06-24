import React, { useState, useEffect } from 'react';
// import './App.css';
// import Square from './PayForm';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../layout/Card3'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const PayOptions = [
  {
title: "$10 Copay",
link: "https://checkout.square.site/pay/c93753af4b6440b384d61ca3f5931bef",
linkTitle: "Pay Here"
  },
  {
title: "$20 Copay",
link: "https://checkout.square.site/pay/0e0bae981b3c4803a5b86168af882b42",
linkTitle: "Pay Here"
  },
  {
    title: "$50 Copay",
    link: " https://checkout.square.site/pay/abc59e5b3fe24cb9a967c623d1230f08",
    linkTitle: "Pay Here"
  },
  {
    title: "$100 Copay",
    link: " https://checkout.square.site/pay/fedea4f86ae2421c995e547e40e74986",
    linkTitle: "Pay Here"
  },
  {
    title: "Custom Amount",
    link: "https://checkout.square.site/pay/f5ff35e519fd4562bd2cf83d64d9fe7f",
    linkTitle: "Pay Here"
  }
]
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // margin: 5,
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    background: 'white',
    margin: 30,
    backgroundColor: theme.palette.primary.dark
    // marginTop: 40
  },
  secondaryheader: {
    textAlign: 'center',
    
  }

}));
const Payment = () => {
  const classes = useStyles();


  // const [isLoad, setLoad] = useState(false);
  // useEffect(() => {
  //   let sqPaymentScript = document.createElement("script");
  //   // sandbox: https://js.squareupsandbox.com/v2/paymentform
  //   // production: https://js.squareup.com/v2/paymentform
  //   sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
  //   sqPaymentScript.type = "text/javascript";
  //   sqPaymentScript.async = false;
  //   sqPaymentScript.onload = () => {
  //     setLoad(true);
  //   };
  //   document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  // });

  // const squarePayment = isLoad ? (
  //       <Square paymentForm={ window.SqPaymentForm }/>
  //   ) : (
  //      null
  //   )

  return (
    <>
<Typography variant="h1" component="h2" className={classes.h1theme}>
  Safely & Securely Make a Payment
</Typography>
<Typography variant="h2" component="h2" className={classes.secondaryheader}>
If you havn't already, 
<br />
 <Link target="_blank" 
                rel="noopener noreferrer" 
                href="https://hushforms.com/cpcpayment"
                underline="always"
                >
        Click this link to make an invoice for your payment
      </Link>
</Typography>
{/* STEP 1: Click the link
    STEP 2: Tell us which forms you need
    STEP 3: Check your email => Fill out => Send
     */}
   {/* <a target="_blank" href="https://checkout.square.site/pay/1165f60963d34b978c2b751aa6ca322c">Pay</a> */}

      <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"  
>
      {PayOptions.map(option => (
        <Grid item xs={12} sm={5}>
        <Paper className={classes.paper} elevation={4}>
<Card 
    title={option.title}
    linkTitle={option.linkTitle} 
    link={option.link} 
   
/>
</Paper>
</Grid>
      ))}
      </Grid>


    {/* // <div className="App">
    //     <h1>Square</h1>
    //    {squarePayment}
    // </div> */}
    </ >
  );
}

export default Payment;