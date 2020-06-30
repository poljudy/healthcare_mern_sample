import React, { useState, useEffect } from 'react';
// import './App.css';
// import Square from './PayForm';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../layout/Card3'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import FlowCard from "../stripe/Flow"
import axios from "axios";
// import scriptLoader from 'react-async-script-loader';
// const CURRENCY = 'usd';

  // const toCent = amount => amount * 100;
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
const Payment =props => {
// const Payment = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  // const [stripe, setStripe] = useState(null);
  // useEffect(() => {
  //   if (isScriptLoaded && isScriptLoadSucceed) {
  //     setStripe(window.Stripe('pk_test_51Gz5xTHeS1LR0EpidmcjltjlNEYrZ954lFAmmH1GrVdKxt4zMNozy89O6ygd54VbnELDzXig2Vn65EUJm3mtI7HA00y3keynrl'));
  //   }
  // }, [isScriptLoaded, isScriptLoadSucceed]);
  const classes = useStyles();


// stripe 
// const [total, setTotal] = useState(1)
// const thisLocation = 'http://localhost:3000';
// const openStripe = async event => {
//   event.preventDefault();
//   const useremail= prompt("Please provide an email for reciept")
//   const session = await axios.post(
//     thisLocation+'/payment/session-initiate',
//     // '/payment/session-initiate',
//     {
//       customerEmail: useremail,
//       clientReferenceId:
//         'Check your profile => Bought Products',
//       lineItem: {
//         name: useremail,
//         description: "custom description about payment- user to fill out",
//         images: 'https://stripe.com/img/v3/home/social.png',
//         amount: toCent(total),
//         currency: CURRENCY,
//         quantity: 1,
//       },
//       successUrl: thisLocation+'/cart/success',
//       cancelUrl: thisLocation+'/cart/fail',
//     }
//   );

//   const result = stripe.redirectToCheckout({
//     sessionId: session.data.id,
//   });

//   console.log(result.error.message);
// };

// if (!stripe) {
//   return (
//     <>
//     </>
//   );
// }
// end stripe
  return (
    <>
<Typography variant="h1" component="h2" className={classes.h1theme}>
  Safely & Securely Make a Payment
</Typography>
<Typography variant="h2" component="h2" className={classes.secondaryheader}>
If you haven't already, 
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
   {/* <FlowCard title={"Pay"} click={openStripe} button={"Pay"} body={"Pay through Stripe"} img={"https://www.picpng.com/uploads/small/Number__PNG_35353.Png"}/> */}
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
    key={option._id} 
   
/>
</Paper>
</Grid>
      ))}
      </Grid>


    {/* // <div className="App">
    //     <h1>Square</h1>
    //    {squarePayment}
    // </div> */}
    </>
  );
}
export default Payment
// export default scriptLoader('https://js.stripe.com/v3/')(Payment);