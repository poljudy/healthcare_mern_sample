import React from "react";
import Card from "../layout/Card1"
import Carousel from "../layout/Carousel"
// import Maps from "../../components/LocationComp/Maps"
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { lightGreen } from "@material-ui/core/colors";
import Typography from '@material-ui/core/Typography';


const MyLocations = [
        {
        text:"location 1",
        lat: 36.86503,
        lng: -76.403973,
        title: "Churchland/Western Branch Area of Chesapeake",
        main: "3101 American Legion Road, Suite 21B", 
       main2: "Chesapeake, VA 23321",
       link1: "(757) 483-3404 (for all offices)",
       link2: "cpc3210@yahoo.com",
       Images:[
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
       ]
    },
    {
        text:"location 2",
        lat: 36.86503,
        lng: -76.403973,
        title: "Churchland/Western Branch Area of Chesapeake",
        main: "3101 American Legion Road, Suite 21B", 
       main2: "Chesapeake, VA 23321",
       link1: "(757) 483-3404 (for all offices)",
       link2: "cpc3210@yahoo.com",
       Images:[
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
       ]
    },
    {
    text:"location 3",
    lat: 36.86503,
    lng: -76.403973,
    title: "Churchland/Western Branch Area of Chesapeake",
    main: "3101 American Legion Road, Suite 21B", 
   main2: "Chesapeake, VA 23321",
   link1: "(757) 483-3404 (for all offices)",
   link2: "cpc3210@yahoo.com",
   Images:[
    'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
   ]
}
]



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // background: theme.palette.primary.dark,
      // height: 400
      // height: "100%",
      paddingTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
      background: 'white',
      margin: 30,
      [theme.breakpoints.down('md')]: {
        margin: 0,
        padding: 0
      }
      // marginTop: 40
    },
  itemtheme: {
    // height: 400,
    // margin: 5,
    // padding: 5
    display: 'flex', 
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginRight: 0,
    marginLeft: 0
  },
  cardtheme: {
    // height: "100%",
    paddingBottom: 15,
    // height: 470
    // minHeight: 500
    flexGrow: 1,
    // paddingTop: 20,
    background: theme.palette.primary.dark,
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
  }
  }));

const Locations = () => {

      const classes = useStyles();
  return ( 
<>
<Typography variant="h1" component="h2" className={classes.h1theme}>
  Find Us at One of Our Three Locations:
</Typography>
    {MyLocations.map(loc =>(
      <div className={classes.root}>

      <Grid container spacing={3} className={classes.cardtheme}  
  // direction="row"
  // justify="center"
  alignItems="stretch"
>

        <Grid item xs={12} md={4} className={classes.itemtheme}>
          <Paper className={classes.paper} elevation={24}>
          <Card 
          className={classes.cardtheme}
         title={loc.text}
          main={loc.main} 
         main2= {loc.main2}
         link1={loc.link1}
         link2={loc.link2}
          /></Paper>
        </Grid>
        {/* <Grid item xs={12} md={4} className={classes.itemtheme}>
          <Paper className={classes.paper} elevation={24}>
          <Maps lat={loc.lat} lng={loc.lng} text={loc.text}/>
          </Paper>
        </Grid> */}


        <Grid item xs={12} md={4} className={classes.itemtheme}>
          <Paper className={classes.paper} elevation={24}><Carousel
         MyLocation={loc}

           /></Paper>
        </Grid>

      </Grid>
    {/* add white line here */}
      {/* <br />
      <br /> */}
    </div>
    ))}
     </ >
  );
};

export default Locations