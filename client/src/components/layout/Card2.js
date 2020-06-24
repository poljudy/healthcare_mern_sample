import React, { useContext } from 'react';
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
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Divider from '@material-ui/core/Divider'
import AuthContext from '../../context/auth/authContext';
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: ,
    margin: 15,
    border: 1,
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
    
  }
  
 
}));

export default function StaffCard(props) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  let i = props.id
  // const [expanded, setExpanded] = React.useState(false);
  const [expandedId, setExpandedId] = React.useState(-1);
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };
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
      {/* { user && props.deletefunc && user.role === "admin" && */}
        {/* <Button onClick={this.props.deletefunc(props.id)}>Delete</Button> */}
      {/* } */}
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

    </>
  );
}