import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ALink from '@material-ui/core/Link';
import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Dbparagraph from '../layout/Dbparagraph'
import FormsIMG from '../../Images/formsIMG.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // margin: 10,
    fontVariant: theme.typography.subtitle2,
    borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.primary.dark
  },
  media: {
    height: 180,
  backgroundSize: 'contain'
  },
  h1theme: {
    color: theme.palette.secondary.dark,
    paddingLeft: 40,
    margin: 15,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    }
  },
  h2theme: {
    color: theme.palette.secondary.dark,
    // paddingLeft: 40,
    margin: 15,
    marginLeft: '25%',
    marginRight: '25%',
    // paddingRight: 40,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      marginLeft: 25,
    marginRight: 25,
    }
  },
  List: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '25%',
    marginRight: '25%',
    // display: "block"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    background: theme.palette.primary.dark,
    margin: 30,
    // marginTop: 40
  },
}));
const Forms = () => {
// export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
        <Typography variant="h1" component="h2" className={classes.h1theme}>
  Forms
</Typography>

{/* <Typography variant="subtitle2" component="h2" className={classes.h2theme}>
  For Hipaa compliency, please click the ALink below to send us a short message with what forms you need and we will send you the ALink with the forms via email. 
</Typography> */}
<Dbparagraph catagory={"editform"}/>

      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
 <Paper className={classes.paper}>
 <ALink    target="_blank" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://hushforms.com/contactcpc">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={FormsIMG}
          title="Teletherapy Concent Form"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            New Patients
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Please request new patient forms
          {/* all 3 forms, concent and info. release of information, and teletherapy form */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button type="ALink" size="small" color="primary" 
                target="_blank" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://hushforms.com/contactcpc">
          After you have scheduled your first appointment, please request the new patient forms
        </Button>
        {/* <Button size="small" color="primary">
          Fill Out 
        </Button> */}
      </CardActions>
    </Card>
    </ALink>
    </Paper>
    {/* // 2nd */}
    {/* > */}
 <Paper className={classes.paper}>
 <ALink    target="_blank" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://hushforms.com/contactcpc">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={FormsIMG}
          title="Teletherapy Concent Form"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Release of Information
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          For current patients
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  color="primary" target="_blank" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://hushforms.com/contactcpc">
          Request Forms
        </Button>
        {/* <Button size="small" color="primary">
          Fill Out 
        </Button> */}
      </CardActions>
    </Card>
    </ALink>
    </Paper>
    {/* <br /> */}
    {/* <br /> */}
    </Grid>
<div>
    <Typography variant="subtitle2" component="h2" className={classes.h2theme}>
    or download the forms below to print and bring into your first session
</Typography>

<List className={classes.List}>
<ListItem>
<Link to="../../Forms/NewPatientForm1.docx" target="_blank" download>New Patient Form 1</Link>
</ListItem>
<ListItem>
<Link to="../../Forms/Newptagreement2.docx" target="_blank" download>New Patient Form 2</Link>
</ListItem>
{/* <ListItem>
<Link to="../../Forms/RELEAS2121312.doc" target="_blank" download>Secondary Release Form</Link>
  </ListItem> */}
  <ListItem>
<Link to="../../Forms/mianReleaseForm.doc" target="_blank" download>Release of Information</Link>
  
</ListItem>
<ListItem>
<Link to="../../Forms/TELETHERAPYINFORMEDCONSENT.doc" target="_blank" download>Teletherapy Release Form</Link>
  </ListItem>
</List>
</div>
{/* // </Typography> */}

    
    
    
   


  {/* 3rd */}
  {/* <Paper className={classes.paper}>
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="http://www.counselinghr.com/wp-content/uploads/2013/08/New-Patient-Gaphic.jpg"
    title="New Patient Form"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    New Patient Form & Agreement
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="small" color="primary" target="_blank" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://hushforms.com/office7592">
          Fill Out/ Download
        </Button>
</CardActions>
</Card>
</Paper> */}

</>
  );
}
export default Forms;