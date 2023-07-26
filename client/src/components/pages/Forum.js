import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import useAxios from "axios-hooks";
import Axios from "axios";
import Fade from "@material-ui/core/Fade";
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Card from "../layout/Card2";
import Paper from "@material-ui/core/Paper";
import AuthContext from "../../context/auth/authContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: 500,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
  },
  card: {
    maxWidth: 345,
    backgroundColor: "floralWhite",
    padding: theme.spacing(2, 3, 2, 3),
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  avatar: {
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    alignContent: "center",
    padding: theme.spacing(3),
    marginTop: 20,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[5],
    padding: 2,
    margin: 15,
  },
  control: {
    padding: theme.spacing(2),
  },
  h1theme: {
    color: theme.palette.secondary.dark,
    paddingLeft: 40,
    margin: 15,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
      textAlign: "center",
      paddingLeft: 0,
    },
  },
  modalPaper: {
    padding: 2,
    backgroundColor: theme.palette.background.default,
  },
}));

const Forum = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;
  const [{ data: mydata, loading }, randomtext] = useAxios({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/api/resources/all",
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openModalAdd = () => {
    handleOpen();
  };
  useEffect(() => {
    randomtext();
  }, []);

  const [myheading, setmyheading] = useState("");
  const [mycatagory, setmycatagory] = useState("");
  const [mysubtitle, setmysubtitle] = useState("");
  const [mybody1, setmybody1] = useState("");
  const [mybody2, setmybody2] = useState("");
  const [myrating, setmyrating] = useState("");

  async function addResource() {
    Axios.post("/api/resources", {
      heading: myheading,
      catagory: mycatagory,
      subtitle: mysubtitle,
      body1: mybody1,
      body2: mybody2,
      rating: myrating,
    })
      .then((res) => console.log(res))
      .then(alert("Saved Resource"))
      .catch((err) => alert(err));
  }

  if (loading && mydata) {
    return (
      <>
        <Typography variant="h1" component="h2" className={classes.h1theme}>
          Frequently Asked Questions & Important Information
        </Typography>
        <Typography variant="h1" component="h2" className={classes.h1theme}>
          Loading
        </Typography>
      </>
    );
  }
  return (
    <>
      {user && (
        <Typography variant="h4" gutterBottom>
          Welcome {user.name}
        </Typography>
      )}
      <Typography variant="h1" component="h2" className={classes.h1theme}>
        Frequently Asked Questions & Important Information
      </Typography>
      {user && user.role === "admin" && (
        <div>
          <Button onClick={randomtext}>Refresh</Button>
          <Button onClick={openModalAdd}>Add a FAQ</Button>
        </div>
      )}

      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          margin="auto"
          alignContent="space-around"
        >
          {mydata &&
            mydata
              .filter((tdata) => tdata.display === true)
              .map((dataR) => (
                <Grid item xs={12} m={12} id={dataR._id} key={dataR._id}>
                  <Paper className={classes.paper}>
                    <Card
                      className={classes.border}
                      title={dataR.heading}
                      subtitle={dataR.subtitle}
                      body1={dataR.body1}
                      body2={dataR.body2}
                      uid={dataR._id}
                      axiosL={"resources"}
                      rating={dataR.rating}
                      catagory={dataR.catagory}
                    />
                  </Paper>
                </Grid>
              ))}
        </Grid>
      </div>

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
            {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
> */}
            {/* <div className={classes.root}> */}
            {/* <div>
      <div><h2>Add a FAQ</h2></div>
      <br /> */}
            <div>
              <h2>Add a FAQ</h2>
            </div>
            <TextField
              label="Heading"
              id="margin-none"
              className={classes.textField}
              value={myheading}
              onChange={(e) => setmyheading(e.target.value)}
              helperText="Your Heading"
            />
            <TextField
              label="Subtitle"
              id="margin-none"
              className={classes.textField}
              value={mysubtitle}
              onChange={(e) => setmysubtitle(e.target.value)}
              // helperText="Add a link"
            />
            <TextField
              label="Catagory"
              id="margin-none"
              className={classes.textField}
              value={mycatagory}
              onChange={(e) => setmycatagory(e.target.value)}
              helperText="for future search results"
            />
            <TextField
              label="rating"
              id="margin-none"
              className={classes.textField}
              value={myrating}
              onChange={(e) => setmyrating(e.target.value)}
              helperText="higher the rating will show on top"
            />
            {/* <TextField
          label="Subtitle"
          id="margin-none"
         
          className={classes.textField}
          value={mysubtitle}
          onChange={(e)=> setmysubtitle(e.target.value)}
          // helperText="Add a link"
        /> */}
            {/* <TextField
          label="Link"
          id="margin-none"
         
          className={classes.textField}
          value={mylink}
          onChange={(e)=> setmylink(e.target.value)}
          helperText="Add a link"
        /> */}
            {/* <TextField
          label="Link Description"
          id="margin-none"
          
          className={classes.textField}
          value={mylinkdescription}
          onChange={(e)=> setmylinkdescription(e.target.value)}
          helperText="Title your link"
        /> */}
            {/* <TextField
          label="Image"
          id="margin-none"
         
          className={classes.textField}
          value={myimg}
          onChange={(e)=> setmyimg(e.target.value)}
          helperText="https:///yourimagehere.jpg"
        /> */}
            {/* </div> */}
            {/* <div> */}

            <TextField
              id="filled-full-width"
              label="Info"
              style={{ margin: 8 }}
              value={mybody1}
              onChange={(e) => setmybody1(e.target.value)}
              helperText="Main Text"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Secondary Text"
              style={{ margin: 8 }}
              value={mybody2}
              onChange={(e) => setmybody2(e.target.value)}
              helperText="second paragraph"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <Button onClick={addResource}>Save FAQ</Button>
            <Button onClick={handleClose}>exit</Button>
            {/* </div>
      <div> */}
            {/* <div><h2>How it will look</h2></div> */}
            {/* <Paper className={classes.paper}> */}
            <Card
              //    dataR.img
              // className={classes.border}
              title={myheading}
              subtitle={mysubtitle}
              body1={mybody1}
              body2={mybody2}
              //  link={mylink}
            />
            {/* </Paper> */}
            {/* // </div> */}
          </div>
          {/* // </Grid> */}
        </Fade>
        {/* )} */}
      </Modal>
    </>
  );
};
export default Forum;
