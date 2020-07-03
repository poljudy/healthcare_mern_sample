import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import {Link} from "react-router-dom"
// import Paper from '@material-ui/core/Paper';
import AuthContext from '../../context/auth/authContext';
import useAxios from "axios-hooks";
import Axios from "axios";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    h2theme: {
color: theme.palette.secondary.dark,
// paddingLeft: 40,
margin: 15,
marginLeft: '23%',
marginRight: '23%',
// paddingRight: 40,
textAlign: 'center',
[theme.breakpoints.down('md')]: {
  fontSize: 38,
  marginLeft: 25,
marginRight: 25
}
    },
h1theme: {
    color: theme.palette.secondary.dark,
    paddingLeft: 40,
    margin: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
      textAlign: 'center',
      paddingLeft: 0,
  }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: lightGreen[500],
    overflow: 'scroll',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '75%',
    width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
    marginTop: 20
  },
  modalPaper: {
    padding: 2,
    backgroundColor: theme.palette.background.default
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
    // }
  }))
  const Dbparagraph = props => {
    const authContext = useContext(AuthContext);
    // const contactContext = useContext(ContactContext);
    
    const { isAuthenticated, logout, user } = authContext;

    const [{ data: DBINFO, loading }, randomtext] = useAxios({
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/resources/catagory/"+props.catagory,
      // headers: { Authorization: `JWT ${accessString}` }
    });
    const classes = useStyles();
    const [myHeadingD, setmyHeadingD] = useState("");
    const [mybody1D, setmybody1D] = useState("");
    const [mybody2D, setmybody2D] = useState("");
    const [mySwitch, setmySwitch] = useState("");
    const [myFAQS, setmyFAQs] = useState(false);
    // modal
    const [open, setOpen] = useState(false);
    async function handleOpen() {
      setOpen(true);
    }
    async function handleClose() {
      setOpen(false);
    }
    async function openModalAdd() {
        setmySwitch("add")
      console.log("clicked modal add")
      handleOpen()
    }
    async function openModalEdit() {
        setmySwitch("edit")
        if(DBINFO.heading){
            setmyHeadingD(DBINFO.heading)
        }
        if(DBINFO.body1){
            setmybody1D(DBINFO.body1)
        }
        if(DBINFO.body2){
            setmybody2D(DBINFO.body2)
        }
        // setMy
      console.log("clicked modal edit")
      handleOpen()
    }
    async function saveDB() {
        if(mySwitch === "add"){
            // axios with add
            Axios.post("/api/resources/catagory/:"+props.catagory, {
                // author: user.id,
             heading: myHeadingD,
             body1: mybody1D,
             body2: mybody2D,
             catagory: props.catagory,
             display: myFAQS,
            //  rating: myratingU,
             // link: mylink
             })
             .then(res => console.log(res))
             .then(alert("Updated Resource"))
             .catch(err => alert(err));
        }else if(mySwitch === "edit"){
            // axios with edit
            Axios.put("/api/resources/catagory/:"+props.catagory, {
                // author: user.id,
             heading: myHeadingD,
             body1: mybody1D,
             body2: mybody2D,
             display: myFAQS,
            //  rating: myratingU,
             // link: mylink
             })
             .then(res => console.log(res))
             .then(alert("Updated Resource"))
             .catch(err => alert(err));
        }
    }
    function deletefunc(myid){
        // event.preventDefault()
            console.log(myid)
            Axios.delete("/api/resources/"+ myid)
            // .then(res => handlebackgroundColor(myid))
            .then(res => alert("deleting"))
          .catch(err => console.log(err))
          };
          function toggleDisplay() {
            if(myFAQS === true){
              setmyFAQs(false)
            }else{
              setmyFAQs(true)
            }
          }
    // useEffect(() => {
    //     randomtext()
    //   }, [])
 if (loading && !DBINFO) {
      return <>
   {/* <Typography variant="h1" component="h2" className={classes.h1theme}>
    Loading
  </Typography> */}
      </>
 }
    return (
        <>
        {/* {console.log(DBINFO)} */}
        {user && user.role === "admin" && 
<div>
<Button onClick={randomtext}>Refresh</Button>
{!DBINFO && 
    <Button onClick={openModalAdd}>Add some text</Button>
}
{DBINFO && 
<div>
<Button onClick={openModalEdit}>Edit text</Button>
<Button onClick={()=> deletefunc(DBINFO._id)}>Delete</Button>
</div>
}
</div>
}
        {DBINFO && DBINFO.body1 && 
<Typography variant="subtitle2" component="h2" className={classes.h2theme}>
{DBINFO.body1}  {/* data from axios */}
</Typography>
        }
{DBINFO && DBINFO.body2 && 
    <Typography variant="subtitle2" component="h2" className={classes.h2theme}>
{DBINFO.body2}  {/* data from axios */}
</Typography>
}
<Modal
     
        
     aria-labelledby="server-modal-title"
     aria-describedby="server-modal-description"
     className={classes.modal}
    //  className={classes.}
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
 
      <div><h2>Add Text</h2></div>
      <TextField
          label="Display on FAQ's page"
          id="margin-none"
        
          className={classes.textField}
          value={myFAQS}
          // onChange={(e)=> setmyHeadingD(e.target.value)}
          helperText="If True this post will display in FAQ's page"
        />
      <Button variant="contained" onClick={()=> toggleDisplay()}>Click to display in FAQ's</Button>
      <TextField
          label="Heading"
          id="margin-none"
        
          className={classes.textField}
          value={myHeadingD}
          onChange={(e)=> setmyHeadingD(e.target.value)}
          helperText="Your Heading (only appears under FAQ's)"
        />
        <TextField
          id="Main text"
          label="Info"
          style={{ margin: 8 }}
          multiline={true}
          rows={3}
          value={mybody1D}
          onChange={(e)=> setmybody1D(e.target.value)}
          helperText="Main Text"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
             <TextField
          id="Secondary text"
          label="Info"
          style={{ margin: 8 }}
          multiline={true}
          rows={3}
          value={mybody2D}
          onChange={(e)=> setmybody2D(e.target.value)}
          helperText="Main Text"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
           <Button onClick={saveDB}>Save</Button>
      <Button onClick={handleClose}>exit</Button>
      {mybody1D && 
<Typography variant="subtitle2" component="h2" className={classes.h2theme}>
{mybody1D}  {/* data from axios */}
</Typography>
        }
{mybody2D && 
    <Typography variant="subtitle2" component="h2" className={classes.h2theme}>
{mybody2D}  {/* data from axios */}
</Typography>
}
    {/* <Card
//    dataR.img
// className={classes.border}
  title={myName}
  subtitle={myTitle}
   body1={myEducation}
   body2={mySpecialities}
  //  img={myImg}
   body3={myOther}
   footer={myHours}

//  link={mylink}
     /> */}
   
   
    </div>




     </Fade>
     {/* )} */}
     </Modal>
</>
    )
  }
  export default Dbparagraph