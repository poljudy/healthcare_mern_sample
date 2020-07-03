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
    const [Therapist, setTherapist] = useState('Please select your therapist');
    const [StaffList, setStaffList] = useState([]);
    // const [relationship, setRelationship] = useState("");
  async function getStaffList(event) {
    Axios.get('/api/staff/bynameall')
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
          {price: 'price_1H0YICLa9svkYtX6IrLCR1XH', quantity: parseInt(myQuantity)}
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
      alert("Please fill out who you are paying for and therapists name")
      
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
          disabled={true}
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
     {/* {StaffList && StaffList.map(staff =>( */}
     {StaffList && StaffList.filter(tdata => tdata.therapist === true).map(staff => (
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