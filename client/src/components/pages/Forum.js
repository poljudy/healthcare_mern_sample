import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
// import { List, ListItem } from "../List";
// import Axios from "axios";
import useAxios from "axios-hooks";
import Axios from "axios";
import Fade from '@material-ui/core/Fade';
// import Cookies from 'js-cookie';
import {
    Grid,
    Typography,
    Button,
    // ListItemAvatar,
    // Avatar,
    // ListItemText,
    // Link
  } from "@material-ui/core";
  import Backdrop from '@material-ui/core/Backdrop';
//   import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import Card from '../layout/Card2';
//   import { red, lightGreen } from '@material-ui/core/colors';
  import Paper from '@material-ui/core/Paper';
// import { Redirect } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
// import ContactContext from '../../context/contact/contactContext';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 500,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 345,
    backgroundColor: "floralWhite",
    padding: theme.spacing(2,3,2,3),
    margin: theme.spacing(2)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  avatar: {
    // backgroundColor: lightGreen[500],
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: lightGreen[500],
    backgroundColor: theme.palette.background.paper,
    // height: '75%',
    // width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
    marginTop: 20
  },
  paper: {
    // width: 400,
    backgroundColor: theme.palette.primary.main,
    // border: '2px solid #000',
    // borderStyle: 'solid',
    // border: 1,
    // borderWidth: 'thick',
    // borderColor : theme.palette.secondary.main,
    boxShadow: theme.shadows[5],
    padding: 2,
    // padding: theme.spacing(2, 4, 3),
    margin: 15
  },
  control: {
    padding: theme.spacing(2),
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
  modalPaper: {
    padding: 2,
    backgroundColor: theme.palette.background.default
  }
  // border: {
  //   borderStyle: 'solid',
  //   border: 1,
  //   borderWidth: 'thick',
  //   borderColor : theme.palette.secondary.main
  // }
}));

const Forum = props =>{
  const authContext = useContext(AuthContext);
  // const contactContext = useContext(ContactContext);
  
  const { isAuthenticated, logout, user } = authContext;
  const [{ data: mydata, loading }, randomtext] = useAxios({
    headers: {
      'Content-Type': 'application/json'
  },
    url: "/api/resources/all",
    // headers: { Authorization: `JWT ${accessString}` }
  });
// function redirectHome () {
//   // Redirect to={'/home'} 
// }
// let mydata =  sdata.filter(function (sdata){
//     return sdata.display === true;
//   })
  
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

//   const [editdataRprofile, setblogedit] = useState(false);
// const [addResourceState, setaddResourceState] = useState(false)
// const openblogform = () =>{
//   setblogedit(true)
//   handleOpen()
// }
const openModalAdd = () => {
  // setaddResourceState(true)
  handleOpen()
}
useEffect(() => {
  randomtext()
}, [])

// function deletefunc(id){
//   console.log(id)
//   Axios.delete("/api/resources/"+ id)
//   .then(res => randomtext())
// .catch(err => console.log(err))
// };
const [myheading, setmyheading] = useState("");
const [mycatagory, setmycatagory] = useState("");
const [mysubtitle, setmysubtitle] = useState("");
// const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
// const [mylink, setmylink] = useState("");
const [mybody1, setmybody1] = useState("");
const [mybody2, setmybody2] = useState("");
const [myrating, setmyrating] = useState("");
// const [myauthor, setmyauthor] = useState("");

// headingM, catM, subtitleM, body1M, body2M, ratingM, linkM
async function addResource () {
//  const message2I = prompt("Ask a question/ or comment & we will get back to you")
  Axios.post("/api/resources", {
    // author: user.id,
    heading: myheading,
    catagory: mycatagory,
    subtitle: mysubtitle,
    body1: mybody1,
    body2: mybody2,
    rating: myrating,
    // link: mylink
  })
  .then(res => console.log(res))
  .then(alert("Saved Resource"))
  .catch(err => alert(err));
}
// function savelike(id, liked, dataRid){
//   console.log(jwtDecode(accessString).dataRname)
//   if(dataRid !== jwtDecode(accessString).id){
   
//     Axios.put("/api/dataRblog/"+id, {
//     liked: liked + 1  
//     },{headers: { Authorization: `JWT ${accessString}` }} )
//     .then(res => randomtext())
//     .catch(err => console.log(err));
//   }
// }
// function savedata(){
//     // console.log(jwtDecode(accessString))
// //    getdataR()
//     // run function to retrieve dataR name
//   Axios.post("/api/dataRblog", {
//     dataRID: jwtDecode(accessString).id,
//     author: jwtDecode(accessString).dataRname,
//     title: mytitle,
//     img: myimg,
//     message: mymessage,
//     messagetwo: mymessagetwo,
//     link: mylink,
//     linkdescription: mylinkdescription
//   },{headers: { Authorization: `JWT ${accessString}` }} )
//   .then(alert("Saved Blog!"))
//   .then(res => randomtext())
//   // .catch(err => console.log(err));
//   .catch(err => alert(err));

// }
// function deletedataR(id){
//   console.log(id)
//   Axios.delete("/api/forum/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
//   .then(res => randomtext())
// .catch(err => console.log(err))
// };

// const { clearContacts } = contactContext;
  if (loading && mydata) {
    return <>
      <Typography variant="h1" component="h2" className={classes.h1theme}>
  Frequently Asked Questions & Important Information
</Typography>
 <Typography variant="h1" component="h2" className={classes.h1theme}>
  Loading
</Typography>
    </>
  }
  return (
    <>
        {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
       
        <FlowCard title={"Step 1"} body={"Click to go to cart"}/>
        <FlowCard title={"Step 2"} body={"Pay through Stripe"}/>
        <FlowCard title={"Step 3"} body={"Come back soon!"}/>
</Grid> */}
{user &&
      <Typography variant="h4" gutterBottom>
Welcome {user.name}
{/* <Button onClick={logout()}>Logout</Button> */}
</Typography>
    }
<Typography variant="h1" component="h2" className={classes.h1theme}>
  Frequently Asked Questions & Important Information
</Typography>
{/* only if role== admin show button */}
{user && user.role === "admin" && 
<div>
<Button onClick={randomtext}>Refresh</Button>
<Button onClick={openModalAdd}>Add a FAQ</Button>
</div>
}

  <div> 
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  margin="auto"
  alignContent="space-around"
>

{mydata && mydata.filter(tdata => tdata.display === true).map(dataR => (
  <Grid item xs={12} m={12} id={dataR._id} key={dataR._id}>
  <Paper className={classes.paper}>
{/* ))}
{mydata && mydata.map(dataR => ( */}
    <Card
//    dataR.img
className={classes.border}
  title={dataR.heading}
  subtitle={dataR.subtitle}
   body1={dataR.body1}
   body2={dataR.body2}
   uid={dataR._id}
   axiosL={"resources"}
   rating={dataR.rating}
   catagory={dataR.catagory}
  //  editfunc={}
  //  deletefunc={this.deletefunc(id)}
     />
     </Paper>
</Grid>
    ))}
    {/* <br />
    <br /> */}
    </Grid>
</div>

    {/* )} */}
    {/* {data ? null : (
      function(){

      setblogedit(false)
      handleOpen()
      }
      
    )} */}
    {/* {addResourceState ? true : ( */}

    
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
      <div><h2>Add a FAQ</h2></div>
      <TextField
          label="Heading"
          id="margin-none"
        
          className={classes.textField}
          value={myheading}
          onChange={(e)=> setmyheading(e.target.value)}
          helperText="Your Heading"
        />
            <TextField
          label="Subtitle"
          id="margin-none"
         
          className={classes.textField}
          value={mysubtitle}
          onChange={(e)=> setmysubtitle(e.target.value)}
          // helperText="Add a link"
        />
           <TextField
          label="Catagory"
          id="margin-none"
         
          className={classes.textField}
          value={mycatagory}
          onChange={(e)=> setmycatagory(e.target.value)}
          helperText="for future search results"
        />
             <TextField
          label="rating"
          id="margin-none"
         
          className={classes.textField}
          value={myrating}
          onChange={(e)=> setmyrating(e.target.value)}
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
          onChange={(e)=> setmybody1(e.target.value)}
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
          onChange={(e)=> setmybody2(e.target.value)}
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
}
export default Forum;