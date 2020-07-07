import React, { useContext, useState, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import Axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  Button,
  Fade,
  Modal,
  Backdrop,
  TextField,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Card
  // Avatar,
  // ListItemText,
  // Link
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    border: 1,
  },
  media: {
    // height: 0,
    paddingTop: '56.25%', // 16:9
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    border: 1,
    imageOrientation: "unset",
    // style: { width: '5rem', height: '5rem' },
    borderColor:theme.palette.primary.dark,
  backgroundSize: 'contain'
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
  theming: {
    color: theme.palette.secondary.dark,
    margin: 8,
    padding: 6,
    
  },
  deviderColor: {
    backgroundColor: theme.palette.primary.dark
  },
  titletheming: {
    color: theme.palette.secondary.dark,
    margin: 8,
    padding: 6,
    borderBottom: 1,
    // borderWidth: 'thick',
    borderBottomWidth: 'thick',
   
    // borderColor : theme.palette.primary.main,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      // textAlign: 'justify'
  }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  modal: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: lightGreen[500],
    overflow: 'scroll',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    // height: '75%',
    // width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
    marginTop: 20
  },
  modalPaper: {
    padding: 2,
    backgroundColor: theme.palette.background.default
  }
}));
const Card2 = (props) => {

  // async function CheckImgDirection(img) {
// if(img.)
    // setmyimg(img)
  // }
  // }
  // if(backgroundId === i){
  //   classes
  // }
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

const [myID, setMyID] = React.useState(null)
  const [open2, setOpen2] = React.useState(false);

  async function handleOpen2() {
    setOpen2(true);
  }
  async function handleClose2() {
    setOpen2(false);
  }
  async function openModalUpdate(myid) {
    if(props.title){
      setmyheadingU(props.title)
    }
    if(props.subtitle){
      setmysubtitleU(props.subtitle)
    }
    if(props.img){
      // CheckImgDirection(props.img)
      setmyimg(props.img)
    }
    if(props.body1){
      setmybody1U(props.body1)
    }
    if(props.body2){
      setmybody2U(props.body2)
    }
    if(props.body3){
      setmybody3U(props.body3)
    }
    if(props.footer){
      setmyfooterU(props.footer)
    }
    // console.log("clicked modal")
setMyID(myid)
    handleOpen2()
  }
  let i = props.id
  const [expandedId, setExpandedId] = React.useState(-1);
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };

const [myheadingU, setmyheadingU] = useState("");
const [mycatagoryU, setmycatagoryU] = useState("");
const [mysubtitleU, setmysubtitleU] = useState("");
// const [mylink, setmylink] = useState("");
const [mybody1U, setmybody1U] = useState("");
const [mybody2U, setmybody2U] = useState("");
const [myratingU, setmyratingU] = useState("");

const [myfooterU, setmyfooterU] = useState("");
const [mybody3U, setmybody3U] = useState("");
const [myimg, setmyimg] = useState("");

  function deletefunc(myid){
// event.preventDefault()
    console.log(myid)
    Axios.delete("/api/"+props.axiosL+"/"+ myid)
    // .then(res => handlebackgroundColor(myid))
    .then(res => alert("deleting"))
  .catch(err => console.log(err))
  };


  async function updateFunc(){
    if(props.axiosL === 'resources'){
    console.log(myID)
    Axios.put("/api/"+props.axiosL+"/update/"+ myID, {
       // author: user.id,
    heading: myheadingU,
    catagory: mycatagoryU,
    subtitle: mysubtitleU,
    body1: mybody1U,
    body2: mybody2U,
    rating: myratingU,
    // link: mylink
    })
    .then(res => console.log(res))
    .then(alert("Updated Resource"))
    .catch(err => alert(err));
  }
  else if(props.axiosL === 'staff'){
// add axios call and properties
Axios.put("/api/"+props.axiosL+"/update/"+ myID, {
  // author: user.id,
name: myheadingU,
// catagory: mycatagoryU,
title: mysubtitleU,
education: mybody1U,
specialties: mybody2U,
other: mybody3U,
hours: myfooterU,
img: myimg
// rating: myratingU,
// link: mylink
})
.then(res => console.log(res))
.then(alert("Updated Resource"))
.catch(err => alert(err));

  }else{
    console.log("did not hit any api routes")
  }
  }
//   function updateFunc(myid){
// console.log("hello")
//   }

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
      <>

    <Card className={classes.root} elevation={6} id={props.id}>
      <CardHeader
      // copy avatar att to makethemes above before using
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // } 
           
        title={
          <Typography gutterBottom variant="subtitle2" className={classes.titletheming}>
            {props.title}
            {/* <Divider variant="middle" className={classes.devidertheme}/> */}
            {/* <Divider classes={{root: classes.dividerColor}} /> */}
         </Typography>
        }
        subheader={
          <Typography gutterBottom variant="body1" className={classes.theming}>
            {props.subtitle}
         </Typography>
        } 
        // titleTypographyProps={{variant:"subtitle2"}}
        // subheaderTypographyProps={{variant: "body1"}}
      />
      {!props.img ? null : (
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
        
      />
      )}
      {/* <CardContent>
      </CardContent> */}
      <CardActions disableSpacing>
      {/* CAN ADD SOCIAL MEDIA LINKS HERE OR PERSONAL WEBSITES */}
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
{/* updatefunc(props.uid) called in modal */}
        { user && user.role === "admin" &&
        <div>
        <Button onClick={()=> deletefunc(props.uid)}>Delete</Button>
        <Button onClick={()=> openModalUpdate(props.uid)}>Edit</Button>
        </div>
      }

        <IconButton
          onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded,
          // })}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          // aria-label="show more"
          
        >
        {/* { user && props.editfunc && user.role === "admin" &&
        <Button onClick={props.editfunc}>Edit</Button>
      } */}
      
          <ExpandMoreIcon />
          <Typography variant="body2" color="textSecondary" component="p">
         View Info
        </Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.body1}
        </Typography>
        {!props.body2 ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
        <br />
         {props.body2}
        </Typography>
        )}
        {!props.body3 ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
        <br />
         {props.body3}
        </Typography>
        )}
        <br />
        {!props.footer ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
         {props.footer}
        </Typography>
        )}
        </CardContent>
      </Collapse>
    </Card>
   
    <Modal
     
        
     aria-labelledby="server-modal-title"
     aria-describedby="server-modal-description"
     className={classes.modal}
    //  className={classes.paper}
     open={open2}
     onClose={handleClose2}
     closeAfterTransition
     BackdropComponent={Backdrop}
     BackdropProps={{
       timeout: 500,
     }}
     
     >
     <Fade in={open2}>
     <div className={classes.modalPaper}>

      <div><h2>edit This Faq</h2></div>
      <TextField
          label="Heading / Name"
          id="margin-none"
        
          className={classes.textField}
          value={myheadingU}
          onChange={(e)=> setmyheadingU(e.target.value)}
          helperText="Your Heading"
        />
            <TextField
          label="Subtitle / Doc Title"
          id="margin-none"
         
          className={classes.textField}
          value={mysubtitleU}
          onChange={(e)=> setmysubtitleU(e.target.value)}
          // helperText="Add a link"
        />
        {props.axiosL === "resources" && 
           <TextField
          label="Catagory"
          id="margin-none"
         
          className={classes.textField}
          value={mycatagoryU}
          onChange={(e)=> setmycatagoryU(e.target.value)}
          helperText="for future search results"
        />
        }
        {props.axiosL === "staff" && 
        <TextField
          label="img"
          id="margin-none"
         
          className={classes.textField}
          value={myimg}
          onChange={(e)=> setmyimg(e.target.value)}
          helperText="change img url to the format '../../Images/jDoe.png'"
        />
        }
        {props.axiosL === "resources" &&
             <TextField
          label="rating"
          id="margin-none"
         
          className={classes.textField}
          value={myratingU}
          onChange={(e)=> setmyratingU(e.target.value)}
          helperText="higher the rating will show on top"
        />
        }
        <TextField
          id="filled-full-width"
          label="Info / Education"
          style={{ margin: 8 }}
          multiline={true}
          rows={3}
          value={mybody1U}
          onChange={(e)=> setmybody1U(e.target.value)}
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
          label="Secondary Text / specialities"
          style={{ margin: 8 }}
         
          value={mybody2U}
          onChange={(e)=> setmybody2U(e.target.value)}
          helperText="second paragraph"
          multiline={true}
          fullWidth
          rows={3}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // if props.url = staff then show body3 and 
        />

        {/*  */}
        {props.axiosL === "staff" && 
                        <TextField
          id="filled-full-width"
          label="Secondary Text"
          style={{ margin: 8 }}
          multiline={true}
          rows={3}
          value={mybody3U}
          onChange={(e)=> setmybody3U(e.target.value)}
          helperText="Other Info"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // if props.url = staff then show body3 and 
        />
        }
        {props.axiosL === "staff" && 
                        <TextField
          id="filled-full-width"
          label="Hours/ footer"
          style={{ margin: 8 }}
          multiline={true}
          rows={2}
          value={myfooterU}
          onChange={(e)=> setmyfooterU(e.target.value)}
          helperText="Hours"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // if props.url = staff then show body3 and 
        />
        }
        {/*  */}


      <Button onClick={updateFunc}>Update</Button>
      <Button onClick={handleClose2}>exit</Button>
    
{/* <div><h2>How it will look</h2></div> */}

   <Card className={classes.root} elevation={6} id={props.id}>
      <CardHeader
        title={
          <Typography gutterBottom variant="subtitle2" className={classes.titletheming}>
            {myheadingU}
            {/* <Divider variant="middle" className={classes.devidertheme}/> */}
            {/* <Divider classes={{root: classes.dividerColor}} /> */}
         </Typography>
        }
        subheader={
          <Typography gutterBottom variant="body1" className={classes.theming}>
            {mysubtitleU}
         </Typography>
        } 
        // titleTypographyProps={{variant:"subtitle2"}}
        // subheaderTypographyProps={{variant: "body1"}}
      />
      {/* {!props.img ? null : (
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
        
      />
      )} */}
      {/* <CardContent>
      </CardContent> */}
      <CardActions disableSpacing>
      {/* CAN ADD SOCIAL MEDIA LINKS HERE OR PERSONAL WEBSITES */}

      {/* } */}

        <IconButton
          onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded,
          // })}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          // aria-label="show more"
          
        >  
          <ExpandMoreIcon />
          <Typography variant="body2" color="textSecondary" component="p">
         View Info
        </Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {mybody1U}
        </Typography>
        {!mybody2U ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
        <br />
         {mybody2U}
        </Typography>
        )}
        {!props.body3 ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
        <br />
         {props.body3}
        </Typography>
        )}
        <br />
        {/* change props */}
        {/* {!props.footer ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
         {props.footer}
        </Typography>
        )} */}
        </CardContent>
      </Collapse>
    </Card>
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
export default Card2;