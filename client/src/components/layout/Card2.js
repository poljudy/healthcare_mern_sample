import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Button } from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Divider from '@material-ui/core/Divider'
import AuthContext from '../../context/auth/authContext';
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Grid,
  Typography,
  Button,
  // ListItemAvatar,
  // Avatar,
  // ListItemText,
  // Link
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: ,
    margin: 15,
    border: 1,
    // backgroundColor: "inherit",
    // display: 'flex',
    // // justifyContent: 'space-between',
    // flexDirection: 'column',
    // alignItems: "stretch",
  },
  media: {
    // height: 0,
    paddingTop: '56.25%', // 16:9
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    border: 1,
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
  // avatar: {
  //   backgroundColor: red[500],
  // },
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
// export default function StaffCard(props) {
  // if(backgroundId === i){
  //   classes
  // }
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;


  const [open2, setOpen2] = React.useState(false);
  // const handleOpen2 = () => {
  //   setOpen2(true);
  // };
  // const handleClose2 = () => {
  //   setOpen2(false);
  // };
  // const openModalUpdate = () => {
  //   // setaddResourceState(true)
  //   handleOpen2()
  // }
  async function handleOpen2() {
    setOpen2(true);
  }
  async function handleClose2() {
    setOpen2(false);
  }
  async function openModalUpdate() {
    console.log("clicked modal")
    handleOpen2()
  }
  let i = props.id
  // const [expanded, setExpanded] = React.useState(false);
  const [expandedId, setExpandedId] = React.useState(-1);
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };
//   const [backgroundId, setBackgroundId] = React.useState(-1);
//   const handlebackgroundColor = i => {
// setBackgroundId(backgroundId === i ? -1 :i);
//   }
// const [myheadingU, setmyheadingU] = useState(props.title);
// const [mycatagoryU, setmycatagoryU] = useState(props.catagory);
// const [mysubtitleU, setmysubtitleU] = useState(props.subtitle);
// // const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
// // const [mylink, setmylink] = useState("");
// const [mybody1U, setmybody1U] = useState(props.body1);
// const [mybody2U, setmybody2U] = useState(props.body2);
// const [myratingU, setmyratingU] = useState(props.rating);

const [myheadingU, setmyheadingU] = useState("");
const [mycatagoryU, setmycatagoryU] = useState("");
const [mysubtitleU, setmysubtitleU] = useState("");
// const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
// const [mylink, setmylink] = useState("");
const [mybody1U, setmybody1U] = useState("");
const [mybody2U, setmybody2U] = useState("");
const [myratingU, setmyratingU] = useState("");
const [myfootergU, setmyfooterU] = useState("");
const [mybody3U, setmybody3U] = useState("");

  function deletefunc(myid){
// event.preventDefault()
    console.log(myid)
    Axios.delete("/api/"+props.axiosL+"/"+ myid)
    // .then(res => handlebackgroundColor(myid))
    .then(res => console.log("deleted"))
  .catch(err => console.log(err))
  };


  async function updateFunc(myid){
    if(props.axiosL === 'resources'){
    console.log(myid)
    Axios.put("/api/"+props.axiosL+"/update/"+ myid, {
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
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
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
        )} */}
      </CardContent>
      <CardActions disableSpacing>
      {/* CAN ADD SOCIAL MEDIA LINKS HERE OR PERSONAL WEBSITES */}
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
{/* updatefunc(props.uid) called in modal */}
        { user && user.role == "admin" &&
        <>
        <Button onClick={()=> deletefunc(props.uid)}>Delete</Button>
        <Button onClick={()=> openModalUpdate()}>Edit</Button>
        </>
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
          {/* <Typography paragraph>
           {props.body1}
          </Typography> */}
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
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
      <div><h2>edit This Faq</h2></div>
      <TextField
          label="Heading"
          id="margin-none"
        
          className={classes.textField}
          value={myheadingU}
          onChange={(e)=> setmyheadingU(e.target.value)}
          helperText="Your Heading"
        />
            <TextField
          label="Subtitle"
          id="margin-none"
         
          className={classes.textField}
          value={mysubtitleU}
          onChange={(e)=> setmysubtitleU(e.target.value)}
          // helperText="Add a link"
        />
           <TextField
          label="Catagory"
          id="margin-none"
         
          className={classes.textField}
          value={mycatagoryU}
          onChange={(e)=> setmycatagoryU(e.target.value)}
          helperText="for future search results"
        />
             <TextField
          label="rating"
          id="margin-none"
         
          className={classes.textField}
          value={myratingU}
          onChange={(e)=> setmyratingU(e.target.value)}
          helperText="higher the rating will show on top"
        />
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          
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
          label="Secondary Text"
          style={{ margin: 8 }}
         
          value={mybody2U}
          onChange={(e)=> setmybody2U(e.target.value)}
          helperText="second paragraph"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      <Button onClick={updateFunc}>Update</Button>
      <Button onClick={handleClose2}>exit</Button>
      {/* </div>
      <div> */}
{/* <div><h2>How it will look</h2></div> */}
{/* <Paper className={classes.paper}> */}
    {/* <Card

  title={myheadingU}
  subtitle={mysubtitleU}
   body1={mybody1U}
   body2={mybody2U} */}
   <Card className={classes.root} elevation={6} id={props.id}>
      <CardHeader
      
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
        {/* {!props.body3 ? null : (
        <Typography variant="body2" color="textSecondary" component="p">
        <br />
         {props.body3}
        </Typography>
        )} */}
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