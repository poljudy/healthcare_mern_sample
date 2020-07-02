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
import Divider from '@material-ui/core/Divider';
import Dbparagraph from '../layout/Dbparagraph'

const MyLocations = [
        {
        text:"Churchland/Western Branch Area of Chesapeake",
        lat: 36.86503,
        lng: -76.403973,
        title: "Churchland/Western Branch Area of Chesapeake",
        main: "3101 American Legion Road, Suite 21B", 
       main2: "Chesapeake, VA 23321",
       link1: "(757) 483-3404 (for all offices)",
       link2: "cpc3210@yahoo.com",
       googlemaps: "https://goo.gl/maps/VhTiMXzk6g7FabFMA",
       Images:[
         '../../Images/mainIMG.jpg',
         '../../Images/ChurStaff.jpg',
        '../../Images/churchland1.HEIC',
        '../../Images/churchland2.HEIC',       
        '../../Images/churchland3.HEIC',
        '../../Images/churchland4.HEIC',
        '../../Images/churchland5.HEIC'
       ]
    },
    {
        text:"Norfolk",
        lat: 36.86503,
        lng: -76.403973,
        title: "Norfolk",
        main: "1709 Colley Ave., Suite 310", 
       main2: "Norfolk, VA 23517",
       link1: "(757) 483-3404 (for all offices)",
       link2: "cpc3210@yahoo.com",
       googlemaps: "https://goo.gl/maps/VhTiMXzk6g7FabFMA",
       Images:[
         '../../Images/norfolkIMG.jpg',
        '../../Images/norfolk1.HEIC',
        '../../Images/norfolk2.HEIC',       
        '../../Images/norfolk3.HEIC',
        '../../Images/norfolk4.HEIC',
        '../../Images/norfolk5.HEIC'
       ]
    },
    {
    text:"Greenbrier Area of Chesapeake",
    lat: 36.86503,
    lng: -76.403973,
    title: "Greenbrier Area of Chesapeake",
    main: "6477 College Park Sq.", 
   main2: "The Atrium, Suite 216; Virginia Beach, VA 23464",
   link1: "(757) 483-3404 (for all offices)",
   link2: "cpc3210@yahoo.com",
   googlemaps: "https://goo.gl/maps/VhTiMXzk6g7FabFMA",
   Images:[
    '../../Images/thirdIMG.jpg'
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
      // height: '100%',
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
    // minHeight: 'max-content',
    // alignItems:"stretch",
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
      <Grid container className={classes.cardtheme}
  direction="row"
  justify="center"
  alignItems="stretch"
>
    {MyLocations.map(loc =>(
<Grid item direction={"column"} md={4} s={12} className={classes.itemtheme}>
      <div className={classes.root}>

        {/* <Grid container xs={12} md={6} className={classes.itemtheme} direction={"column"}> */}
          <Paper className={classes.paper} elevation={24}>
          {/* <Grid item xs={12} md={4} className={classes.itemtheme} direction={"column"}></Grid> */}
          <Card 
          className={classes.cardtheme}
         title={loc.text}
          main={loc.main} 
         main2= {loc.main2}
         link1={loc.link1}
         link2={loc.link2}
         link3={loc.googlemaps}
          />
          {/* </Paper> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} md={4} className={classes.itemtheme}>
          <Paper className={classes.paper} elevation={24}>
          <Maps lat={loc.lat} lng={loc.lng} text={loc.text}/>
          </Paper>
        </Grid> */}


        {/* <Grid item xs={12} md={4} className={classes.itemtheme}> */}
          {/* <Paper className={classes.paper} elevation={24}> */}
          <Carousel
         MyLocation={loc}

           /></Paper>
        {/* </Grid> */}

    {/* add white line here */}
      {/* <br />
      <br /> */}
    <Divider  flexItem={true} variant={"fullWidth"} light={true} orientation={"vertical"} />
    </div>
    </Grid>
    ))}
      </Grid>
      <Dbparagraph catagory={"editlocal"}/>
     </ >
  );
};

export default Locations