import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Axios from "axios";
import {
  TextField,
  Typography,
  Button,
  makeStyles,
  Paper,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
const stripePromise = loadStripe(
  "pk_live_51GzAYhLa9svkYtX6ly1T2LWxFE5QI6qP0DQGZJvofGRV9tTEPXmvw5r39wb3qk58Gnc2mx0KRdwmFUOXO7rUnmbe00BE7qf6fC"
);
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    borderStyle: "solid",
    border: 1,
    borderWidth: "thick",
    borderColor: theme.palette.primary.main,
    margin: theme.spacing(6),
    padding: theme.spacing(6),
    minHeight: 400,
    display: "inline-grid",
  },
  theming: {
    color: theme.palette.primary.dark,
  },
  h1theme: {
    color: theme.palette.secondary.dark,
    paddingLeft: 40,
    margin: 20,
    marginTop: 40,
    textAlign: "center",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    background: "white",
    margin: 30,
    backgroundColor: theme.palette.primary.dark,
  },
  secondaryheader: {
    textAlign: "center",
  },
  textField: {
    backgroundColor: theme.palette.background.default,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: theme.spacing(3),
    marginTop: 20,
  },
  modalPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(5),
    marginLeft: "15%",
    marginRight: "15%",
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const Payment = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  async function handleOpen() {
    setOpen(true);
  }
  async function handleCloseName(name) {
    setTherapist(name);
    setOpen(false);
  }
  async function handleClose() {
    setOpen(false);
  }
  async function openModalAdd() {
    getStaffList();
    console.log("clicked modal");
    handleOpen();
  }
  const [myQuantity, setMyQuantity] = useState();
  const [patient, setPatient] = useState("");
  const [Therapist, setTherapist] = useState("Please select your therapist");
  const [StaffList, setStaffList] = useState([]);
  async function getStaffList(event) {
    Axios.get("/api/staff/bynameall")
      .then((res) => {
        const mydata = res.data;
        setStaffList(mydata);
        console.log(StaffList);
      })
      .catch((err) => alert(err));
  }
  const myDesc = "patients name:  " + patient + "paying " + Therapist;

  const handleClick = async (event) => {
    if (patient !== "" && patient.length > 1 && Therapist !== null) {
      console.log(Therapist + "therapist name && my Desc: " + myDesc);
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        clientReferenceId: myDesc,
        lineItems: [
          {
            price: "price_1H0YICLa9svkYtX6IrLCR1XH",
            quantity: parseInt(myQuantity),
          },
        ],
        mode: "payment",
        successUrl: "http://www.counselinghr.com/success",
        cancelUrl: "http://www.counselinghr.com/payfail",
      });
    } else {
      alert("Please fill out who you are paying for and therapists name");
    }
  };
  useEffect(() => {
    getStaffList();
  }, []);

  return (
    <>
      <Typography variant="h1" component="h2" className={classes.h1theme}>
        Safely & Securely Make a Payment
      </Typography>
      <Paper className={classes.paper} elevation={4}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Amount"
            id="outlined-basic"
            variant="outlined"
            className={classes.textField}
            value={myQuantity}
            onChange={(e) => setMyQuantity(e.target.value)}
          />
          <TextField
            label="Patients Name"
            id="outlined-basic"
            variant="outlined"
            className={classes.textField}
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <TextField
            label="Therapist"
            id="margin-none"
            disabled={true}
            value={Therapist}
          />

          <Button variant="outlined" color="primary" onClick={openModalAdd}>
            Click to choose a Therapist
          </Button>

          <Button role="link" variant="contained" onClick={handleClick}>
            Checkout
          </Button>
        </form>
      </Paper>
      <Modal
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
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
            {StaffList &&
              StaffList.filter((tdata) => tdata.therapist === true).map(
                (staff) => (
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                    onClick={() => handleCloseName(staff.name)}
                  >
                    {staff.name}
                  </Button>
                )
              )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Payment;
