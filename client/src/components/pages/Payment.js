import React, {useState, useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
// import useAxios from "axios-hooks";
import Axios from "axios";
// import Card3 from '../layout/Card3'
import {
  TextField,
  Typography,
  Button,
  makeStyles,
  Paper,
  Modal,
  Fade,
  Backdrop
    // ListItemAvatar,
  // Avatar,
  // ListItemText,
  // Link
} from "@material-ui/core";
// import AlertState from '../../context/alert/AlertState';
const stripePromise = loadStripe('pk_live_51GzAYhLa9svkYtX6ly1T2LWxFE5QI6qP0DQGZJvofGRV9tTEPXmvw5r39wb3qk58Gnc2mx0KRdwmFUOXO7rUnmbe00BE7qf6fC');
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.primary.main,
    margin: theme.spacing(6),
    padding: theme.spacing(6),
    minHeight: 400,
    display: 'inline-grid'
    // width: theme.spacing(300),

  //  alignItems: 'center'
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
    
  },
  textField: {
    backgroundColor: theme.palette.background.default,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: lightGreen[500],
    overflow: 'scroll',
    // maxWidth: '100%',
    backgroundColor: 'transparent',
      boxShadow: 'none',
    // backgroundColor: theme.palette.background.paper,
    // height: '75%',
    // width: '75%',
    // alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
    marginTop: 20
  },
  modalPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(5),
    marginLeft: '15%',
    marginRight: '15%',
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
// function App() {
  const Payment = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
  async function handleOpen() {
    setOpen(true);
  }
  async function handleCloseName(name){
    setTherapist(name)
    setOpen(false)
  }
  async function handleClose() {
    setOpen(false);
  }
  async function openModalAdd() {
    getStaffList()
    console.log("clicked modal")
    handleOpen()
  }
    // const toCent = amount => amount * 100;
    const [myQuantity, setMyQuantity] = useState();
    const [patient, setPatient] = useState("");
    const [Therapist, setTherapist] = useState('Main Office Payment');
    const [StaffList, setStaffList] = useState([]);
    // const [relationship, setRelationship] = useState("");
  async function getStaffList(event) {
    Axios.get('/api/staff/all')
    .then(res => {
      const mydata = res.data;
      setStaffList(mydata)
      console.log(StaffList)
    })
    .catch(err => alert(err));
    // setAnchorEl(event.currentTarget);
    }
    const myDesc = 'patients name:  '+ patient + 'paying ' + Therapist;
    
    const handleClick = async (event) => {
      if(patient !== "" && patient.length > 1 && Therapist !== null ){
        // When the customer clicks on the button, redirect them to Checkout.
        console.log(Therapist + "therapist name && my Desc: " + myDesc)
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
        // product: [
        // ],
        // item: [{}],
        // items: [{sku: myDesc}],
        
        // paymentIntentData: {metadata:{myDesc}},
        clientReferenceId: myDesc,
        // payment_intent_data : [{description: myDesc}],
        lineItems: [
          // Replace with the ID of your price
          // price_1H0IwcLa9svkYtX6HWZ7vWE7
          // price_1GzZ1mLa9svkYtX6p7QAvgYj
          {price: 'price_1H0CRaLa9svkYtX6hKrnzDdk', quantity: parseInt(myQuantity)}
        ],
        mode: 'payment',
        successUrl: 'http://www.counselinghr.com/success',
        cancelUrl: 'http://www.counselinghr.com/payfail',
        
        // billingAddressCollection: 'required',
        // description: 'patients name:  '+ patient +'by '+ relationship
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    }else{
      alert("Please Refresh the page &/or fill out who you are paying for")
      
    }
    };
  useEffect(() => {
      getStaffList()
    }, [])
    
    
  return (
    <>
    <Typography variant="h1" component="h2" className={classes.h1theme}>
  Safely & Securely Make a Payment
</Typography>
<Paper className={classes.paper} elevation={4}>

    <form className={classes.root} noValidate autoComplete="off">

      <TextField
          label="Amount"
          // id="margin-none number"
          id="outlined-basic"
          variant="outlined"
          className={classes.textField}
          value={myQuantity}
          onChange={(e)=> setMyQuantity(e.target.value)}
          // onChange={(event, myQuantity) => setMyQuantity(myQuantity)}
          // helperText="for future search results"
        />
          <TextField
          label="Patients Name"
          // id="margin-none"
          id="outlined-basic"
          variant="outlined"
          className={classes.textField}
          value={patient}
          onChange={(e)=> setPatient(e.target.value)}
          // helperText="for future search results"
        />
           <TextField
          label="Therapist"
          id="margin-none"
          // className={classes.textField}
          value={Therapist}
          // onChange={(e)=> setPatient(e.target.value)}
          // helperText="for future search results"
        />
        
<Button 
variant="outlined" color="primary"
onClick={openModalAdd}>Click to choose a Therapist</Button>

          
    <Button role="link" variant="contained" onClick={handleClick}>
      Checkout
    </Button>
    </form>
    
    </Paper>
    <Modal
     
        
     aria-labelledby="server-modal-title"
     aria-describedby="server-modal-description"
     className={classes.modal}
    //  className={classes.paper}
     open={open}
     onClose={handleClose}
     closeAfterTransition
     BackdropComponent={Backdrop}
     BackdropProps={{
       timeout: 500,
     }}
     
     >
     <Fade in={open}>
     <div className={classes.modalPaper}>
     {StaffList && StaffList.map(staff =>(
      <Button 
      variant="contained" size="large" color="primary" 
      className={classes.margin}onClick={()=>handleCloseName(staff.name)}
      >
      {staff.name}
        </Button>
     ))}
{/* <Button variant="outlined" onClick={()=>handleCloseName(staff.name)}>{staff.name}</Button> */}

     </div>
     </Fade>
    
     </Modal>
    </>
  );
}

export default Payment;





// import React, { useState, useEffect } from 'react';
// // import './App.css';
// // import Square from './PayForm';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '../layout/Card3'
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// // import FlowCard from "../stripe/Flow"
// import axios from "axios";
// // import scriptLoader from 'react-async-script-loader';
// // const CURRENCY = 'usd';

//   // const toCent = amount => amount * 100;
// const PayOptions = [
//   {
// title: "$10 Copay",
// link: "https://checkout.square.site/pay/c93753af4b6440b384d61ca3f5931bef",
// linkTitle: "Pay Here"
//   },
//   {
// title: "$20 Copay",
// link: "https://checkout.square.site/pay/0e0bae981b3c4803a5b86168af882b42",
// linkTitle: "Pay Here"
//   },
//   {
//     title: "$50 Copay",
//     link: " https://checkout.square.site/pay/abc59e5b3fe24cb9a967c623d1230f08",
//     linkTitle: "Pay Here"
//   },
//   {
//     title: "$100 Copay",
//     link: " https://checkout.square.site/pay/fedea4f86ae2421c995e547e40e74986",
//     linkTitle: "Pay Here"
//   },
//   {
//     title: "Custom Amount",
//     link: "https://checkout.square.site/pay/f5ff35e519fd4562bd2cf83d64d9fe7f",
//     linkTitle: "Pay Here"
//   }
// ]
// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     // margin: 5,
//   },
//   theming: {
//     color: theme.palette.primary.dark
//   },
//   h1theme: {
//     color: theme.palette.secondary.dark,
//     paddingLeft: 40,
//     margin: 20,
//     marginTop: 40,
//     textAlign: 'center',
//     padding: 10,
//     [theme.breakpoints.down('md')]: {
//       fontSize: 50,
//     }
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: '100%',
//     background: 'white',
//     margin: 30,
//     backgroundColor: theme.palette.primary.dark
//     // marginTop: 40
//   },
//   secondaryheader: {
//     textAlign: 'center',
    
//   }

// }));
// const Payment =props => {
// // const Payment = ({ isScriptLoaded, isScriptLoadSucceed }) => {
//   // const [stripe, setStripe] = useState(null);
//   // useEffect(() => {
//   //   if (isScriptLoaded && isScriptLoadSucceed) {
//   //     setStripe(window.Stripe('pk_test_51Gz5xTHeS1LR0EpidmcjltjlNEYrZ954lFAmmH1GrVdKxt4zMNozy89O6ygd54VbnELDzXig2Vn65EUJm3mtI7HA00y3keynrl'));
//   //   }
//   // }, [isScriptLoaded, isScriptLoadSucceed]);
//   const classes = useStyles();


// // stripe 
// // const [total, setTotal] = useState(1)
// // const thisLocation = 'http://localhost:3000';
// // const openStripe = async event => {
// //   event.preventDefault();
// //   const useremail= prompt("Please provide an email for reciept")
// //   const session = await axios.post(
// //     thisLocation+'/payment/session-initiate',
// //     // '/payment/session-initiate',
// //     {
// //       customerEmail: useremail,
// //       clientReferenceId:
// //         'Check your profile => Bought Products',
// //       lineItem: {
// //         name: useremail,
// //         description: "custom description about payment- user to fill out",
// //         images: 'https://stripe.com/img/v3/home/social.png',
// //         amount: toCent(total),
// //         currency: CURRENCY,
// //         quantity: 1,
// //       },
// //       successUrl: thisLocation+'/cart/success',
// //       cancelUrl: thisLocation+'/cart/fail',
// //     }
// //   );

// //   const result = stripe.redirectToCheckout({
// //     sessionId: session.data.id,
// //   });

// //   console.log(result.error.message);
// // };

// // if (!stripe) {
// //   return (
// //     <>
// //     </>
// //   );
// // }
// // end stripe
//   return (
//     <>
// <Typography variant="h1" component="h2" className={classes.h1theme}>
//   Safely & Securely Make a Payment
// </Typography>
// <Typography variant="h2" component="h2" className={classes.secondaryheader}>
// If you haven't already, 
// <br />
//  <Link target="_blank" 
//                 rel="noopener noreferrer" 
//                 href="https://hushforms.com/cpcpayment"
//                 underline="always"
//                 >
//         Click this link to make an invoice for your payment
//       </Link>
// </Typography>
// {/* STEP 1: Click the link
//     STEP 2: Tell us which forms you need
//     STEP 3: Check your email => Fill out => Send
//      */}
//    {/* <a target="_blank" href="https://checkout.square.site/pay/1165f60963d34b978c2b751aa6ca322c">Pay</a> */}
//    {/* <FlowCard title={"Pay"} click={openStripe} button={"Pay"} body={"Pay through Stripe"} img={"https://www.picpng.com/uploads/small/Number__PNG_35353.Png"}/> */}
//       <Grid
//   container
//   direction="row"
//   justify="space-evenly"
//   alignItems="center"  
// >

//       {PayOptions.map(option => (
//         <Grid item xs={12} sm={5}>
//         <Paper className={classes.paper} elevation={4}>
// <Card 
//     title={option.title}
//     linkTitle={option.linkTitle} 
//     link={option.link}
//     key={option._id} 
   
// />
// </Paper>
// </Grid>
//       ))}
//       </Grid>


//     {/* // <div className="App">
//     //     <h1>Square</h1>
//     //    {squarePayment}
//     // </div> */}
//     </>
//   );
// }
// export default Payment
// // export default scriptLoader('https://js.stripe.com/v3/')(Payment);