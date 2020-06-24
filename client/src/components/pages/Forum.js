import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Modal from "@material-ui/core/Modal";
// import { List, ListItem } from "../List";
// import Axios from "axios";
import useAxios from "axios-hooks";
import Axios from "axios";
// import Fade from '@material-ui/core/Fade';
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
//   import Backdrop from '@material-ui/core/Backdrop';
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
    // backgroundColor: '#5HN7E7K',
    height: '75%',
    width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
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
  // border: {
  //   borderStyle: 'solid',
  //   border: 1,
  //   borderWidth: 'thick',
  //   borderColor : theme.palette.secondary.main
  // }
}));

const Forum = props =>{

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

// const openblogform = () =>{
//   setblogedit(true)
//   handleOpen()
// }
useEffect(() => {
  randomtext()
}, [])

function deletefunc(id){
  console.log(id)
  Axios.delete("/api/resources/"+ id)
  .then(res => randomtext())
.catch(err => console.log(err))
};
// const [mytitle, setmytitle] = useState("");
// const [mycatagory, setmycatagory] = useState("");
// const [myheading, setmyheading] = useState("");
// const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
// const [mylink, setmylink] = useState("");
// const [mybody1, setmybody1] = useState("");
// const [mybody2, setmybody2] = useState("");
// const [myauthor, setmyauthor] = useState("");

// async function addResource (titleM, catM, imgM, linkM, authorM, heading, numissuesM, priceM, messageM) {
//  const message2I = prompt("Ask a question/ or comment & we will get back to you")
//   Axios.post("/api/resource", {
//     userID: jwtDecode(accessString).id,
//     Title: titleM,
//     img: imgM,
//     link: linkM,
//     author: authorM,
//     catagory: catM,
//     heading: heading,
//     numIssues: numissuesM,
//     price: priceM,
//     message: messageM,
//     payed: false,
//     message2: message2I
//   },{headers: { Authorization: `JWT ${accessString}` }})
//   .then(res => console.log(res))
//   .then(alert("Saved to Cart"))
//   .catch(err => alert(err));
// }
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
const authContext = useContext(AuthContext);
// const contactContext = useContext(ContactContext);

const { isAuthenticated, logout, user } = authContext;
// const { clearContacts } = contactContext;
  if (loading && mydata) {
    return <>
      <Typography variant="h1" component="h2" className={classes.h1theme}>
  Frequently Asked Questions & Important Information
</Typography>
 <Typography variant="h1" component="h2" className={classes.h1theme}>
  Loading
</Typography>
    </>;
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
<Button onClick={randomtext}>fetch dataR</Button>
{/* {!data ? null : ( */}
  <div> 
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  margin="auto"
  alignContent="space-around"
>

{mydata && mydata.map(dataR => (
  <Grid item xs={12} m={12} id={dataR._id} key={dataR._id}>
  <Paper className={classes.paper}>
    <Card
//    dataR.img
className={classes.border}
  title={dataR.heading}
  subtitle={dataR.subtitle}
   body1={dataR.body1}
   body2={dataR.body2}
   id={dataR._id}
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
    
        {/* <Modal
     
        
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
       
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
    <div className={classes.root}>
      <div>
      <div><h2>What's on your mind?</h2></div>
      <br />
      <TextField
          label="Name"
          id="margin-none"
        
          className={classes.textField}
          value={myauthor}
          onChange={(e)=> setmyauthor(e.target.value)}
          helperText="Your Name"
        />
        <TextField
          label="Title"
          id="margin-none"
         
          className={classes.textField}
          value={mytitle}
          onChange={(e)=> setmytitle(e.target.value)}
          helperText="Batman is awesome"
        />
          <TextField
          label="Link"
          id="margin-none"
         
          className={classes.textField}
          value={mylink}
          onChange={(e)=> setmylink(e.target.value)}
          helperText="Add a link"
        />
                  <TextField
          label="Link Description"
          id="margin-none"
          
          className={classes.textField}
          value={mylinkdescription}
          onChange={(e)=> setmylinkdescription(e.target.value)}
          helperText="Title your link"
        />
                <TextField
          label="Image"
          id="margin-none"
         
          className={classes.textField}
          value={myimg}
          onChange={(e)=> setmyimg(e.target.value)}
          helperText="https:///yourimagehere.jpg"
        />
        </div>
        <div>
  
     
    
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          
          value={mymessage}
          onChange={(e)=> setmymessage(e.target.value)}
          helperText="Main blog area"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
                <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
         
          value={mymessagetwo}
          onChange={(e)=> setmymessagetwo(e.target.value)}
          helperText="More information, will display on click"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
           <Button onClick={savedata}>Save Blog</Button>
      <Button onClick={handleClose}>exit</Button>
      </div>
      <div>
<div><h2>How it will look</h2></div>
<Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="blog" className={classes.avatar}>
            B
          </Avatar>
        }
        title={mytitle}
        subheader={myauthor}
      />
      <CardMedia
        className={classes.media}
        image={myimg}
        title={myauthor}
      />
      <CardContent>

        <Typography variant="body2" color="textSecondary" component="p">
       Name: {myauthor} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {mymessage} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created: {Date.now}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        <Button>Delete</Button>
        || <a>Click me {mylinkdescription}</a> || Click => for more
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
 </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {mymessagetwo}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
</div>
   
    </div>
</Grid>
    </Fade>
        </Modal> */}

      </>
  );
}
export default Forum;