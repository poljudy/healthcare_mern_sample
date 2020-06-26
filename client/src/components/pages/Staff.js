import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '../layout/Card2'
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
import useAxios from "axios-hooks";
import Axios from "axios";
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
  import Dbparagraph from '../layout/Dbparagraph'

  import Backdrop from '@material-ui/core/Backdrop';
  import Paper from '@material-ui/core/Paper';
import AuthContext from '../../context/auth/authContext';
// const mWeissman = '../../Images/mWeissman.jpg'
// const StaffList = [
//     {
//         name: "Michael S. Weissman",
//         _id: 1,
//         title: "PhD Clinical Director",
//         specialties: 'Individual Adult Psychotherapy, Family, Marital, Psychological Testing',
//         education: 'Princeton University, 1970. University of Massachusetts, 1974, PhD Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology.',
//         other: 'Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology. Assistant Professor of Behavioral Science, adjunct faculty, Eastern Virginia Medical School',
//         hours: 'Churchland and Norfolk offices.',
//         img: mWeissman   
//     },
//     {
//         name: "Barbara B. Forbes",
//         _id: 2,
//         title: "MS Licensed Marriage and Family Therapist, Licensed Professional Counselor",
//         specialties: 'Depression and anxiety; adult survivors of childhood sexual, physical, and emotional abuse; substance abuse; weight/overeating concerns; overspending behaviors; relationship “addictions,” (codependency). Helps couples understand how their individual histories impact the marital relationship. Provides counseling and support for couples considering separation and/or divorce. Work-related concerns, stress management, women’s issues, as well as issues related to loss and grief. From a military family herself, she provides mental health services to members of the military and their families. Provider with Military One Source, Coast Guard EAP, as well as most other insurances and EAPs.',
//         education: 'Old Dominion University, MS, Psychology, 1976.',
//         other: ' Works with: Adults, Couples, Families, Groups. In private practice at Churchland Psychological Center, Churchland office, since 1989.',
//         hours: 'Churchland office',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/06/Picture-063-150x150.jpg'
//     },
//     {
//         name: "Jody Alperin",
//         _id: 3,
//         title: "PsyD, Licensed Clinical Psychologist",
//         specialties: 'Individual Psychotherapy with Adults, Couples and Marital Therapy, Family Therapy, Psychological Testing',
//         education: 'Oberlin College, BA (1990)',
//         other: 'Virginia Consortium for Professional Psychology, PsyD (1995)',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/07/Jody-Alperin2-150x150.jpg'
//     },
//     {
//         name: "Thomas J. Scott",
//         _id: 4,
//         title: "MS, MSW, LCSW",
//         specialties: 'Forty years of clinical experience with adult and adolescent individual and family therapy. Primarily a cognitive-behavioral therapist with the capacity to provide online services.',
//         education: 'Accepts most insurances and employee assistance programs.',
//         other: 'Churchland, Mon., Tue., 8 AM – 7 PM',
//         hours: 'Great Bridge, Wed., 8 AM – 6 PM; Thu., 8 AM – 7 PM',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/07/Tom-Scott-Cropped-150x150.jpg'
//     },
//     {
//         name: "Sara Litt",
//         _id: 5,
//         title: "LCSW, Licensed Clinical Social Worker",
//         specialties: ' Individual and Family Therapy, Depression, Anxiety, Grief, Stress Management, Couples Counseling',
//         education: 'University of Virginia, BA (1998) Columbia University, MSSW (2001)',
//         other: 'Churchland Office, Tue., Thu., 9 AM – 5 PM.',
//         hours: 'Norfolk Office, Mon., Wed. 8 AM – 1 PM.',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/06/Picture-038-150x150.jpg'
//     },
//     {
//         name: "Catherine D. Smithson",
//         _id: 6,
//         title: "LCSW, Licensed Clinical Social Worker",
//         specialties: 'Depression, Anxiety, Grief; Family, Marital and Couple Issues, Stress Management, Trauma Survivors, Experience with Gay and Lesbian Couples. Works primarily with adults and older teens',
//         education: ' Worked in the mental health field since 1981 in inpatient facilities, outpatient community service and private practice.',
//         other: 'Accepts most insurances and employee assistance programs.', 
//         hours: 'Churchland, Thursdays and Fridays.',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/07/Catherine-Smithson-Cropped-150x150.jpg'
//     },
//     {
//         name: "Susan M. Asprey",
//         _id: 7,
//         title: "LCSW, CSAC",
//         specialties: 'Substance Abuse, Multiple Addictions, PTSD, Stress Disorders, Anxiety. Provides individual, marital/couple, family and group therapy. Certified member National Certified Social Work Supervisors to provide supervision for graduates from master’s programs in social work for licensure.',
//         education: 'Master of Social Work, Norfolk State University, 1995 Bachelor of Arts, Psychology,  Old Dominion University, 1984. Mental health provider since 1986. Acknowledged in Who’s Who for her expertise in the treatment of military families, personality disorders, and depressive disorders. Trained in dialectical behavior therapy for treatment of PTSD dual diagnosis and multiple addictions. Addresses multiple facts of life – mental, physical, psychological, and social. Provides treatment for adults and adolescents.',
//         other: 'Member, National Association of Social Workers, Academy of Certified Social Workers, and Psi Chi.', 
//         hours: 'Churchland; flexible hours per client need.',
//         img: 'http://www.counselinghr.com/wp-content/uploads/2012/07/Susan-Asprey-Smaller.jpg'
//     }
// ]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 5,
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
  theming: {
    color: theme.palette.primary.dark
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
  cardtheme: {
    // height: 'auto'
    display: 'grid',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: "stretch"
  }
}));
const Staff = props => {
// export default function StaffCard() {
  const authContext = useContext(AuthContext);
  // const contactContext = useContext(ContactContext);
  
  const { isAuthenticated, logout, user } = authContext;
  const [{ data: StaffList, loading }, randomtext] = useAxios({
    headers: {
      'Content-Type': 'application/json'
    },
    url: "/api/staff/all",
    // headers: { Authorization: `JWT ${accessString}` }
  });
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick () {
    setExpanded(!expanded);
  };

  const [open, setOpen] = useState(false);
  async function handleOpen() {
    setOpen(true);
  }
  async function handleClose() {
    setOpen(false);
  }
  async function openModalAdd() {
    console.log("clicked modal")
    handleOpen()
  }

  useEffect(() => {
    randomtext()
  }, [])

  // function deletefunc(id){
  //   console.log(id)
  //   Axios.delete("/api/staff/"+ id)
  //   .then(res => randomtext())
  // .catch(err => console.log(err))
  // };
  const [myName, setmyName] = useState("");
  // const [mycatagory, setmycatagory] = useState("");
  const [myTitle, setmyTitle] = useState("");
  // const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
  // const [mylink, setmylink] = useState("");
  const [myEducation, setmyEducation] = useState("");
  const [mySpecialities, setmySpecialities] = useState("");
  const [myOther, setmyOther] = useState("");
  const [myImg, setmyImg] = useState("../../Images/cpclogo2.png");
  const [myHours, setmyHours] = useState("");


  async function addStaffMember () {
    //  const message2I = prompt("Ask a question/ or comment & we will get back to you")
      Axios.post("/api/staff", {
        // author: user.id,
        name: myName,
        title: myTitle,
        education: myEducation,
        specialties: mySpecialities,
        other: myOther,
        hours: myHours,
        img: myImg
      })
      .then(res => console.log(res))
      .then(alert("Saving Staff Member"))
      .catch(err => alert(err));
    }

    if (loading && StaffList) {
      return <>
        <Typography variant="h1" component="h2" className={classes.h1theme}>
        Our Therapists
  </Typography>
   <Typography variant="h1" component="h2" className={classes.h1theme}>
    Loading
  </Typography>
      </>
    }else
  return (
      <>
      <Typography variant="h1" component="h2" className={classes.h1theme}>
  Our Therapists
</Typography>

<Dbparagraph catagory={"editstaff"}/>

{user &&
      <Typography variant="h4" gutterBottom>
Welcome {user.name}
</Typography>
    }
    {user && user.role == "admin" && 
<div>
<Button onClick={randomtext}>Refresh</Button>
<Button onClick={openModalAdd}>Add a staff member</Button>
</div>
}
      <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="stretch"  
>
      {StaffList&& StaffList.map(staff => (
        <Grid item xs={12} sm={6} md={4} className={classes.cardtheme}>
<Card 
className={classes.cardtheme}
    title={staff.name}
    subtitle={staff.title}  
    img={staff.img} 
    body1={staff.education}
    body2={staff.specialties}
    body3={staff.other}
    footer={staff.hours}
    id={staff._id}
    uid={staff._id}
   axiosL={"staff"}
/>
</Grid>
      ))}
      </Grid>
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
          value={myName}
          onChange={(e)=> setmyName(e.target.value)}
          helperText="Your Heading"
        />
            <TextField
          label="Subtitle"
          id="margin-none"
         
          className={classes.textField}
          value={myTitle}
          onChange={(e)=> setmyTitle(e.target.value)}
          // helperText="Add a link"
        />
           <TextField
          label="Hours"
          id="margin-none"
         
          className={classes.textField}
          value={myHours}
          onChange={(e)=> setmyHours(e.target.value)}
          helperText="Appears on the bottom"
        />
             <TextField
          label="image"
          id="margin-none"
          className={classes.textField}
          value={myImg}
          onChange={(e)=> setmyImg(e.target.value)}
          helperText="ex: john doe => jDoe in the format '../../Images/jDoe.jpg'"
        />
  
     
    
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          
          value={myEducation}
          onChange={(e)=> setmyEducation(e.target.value)}
          helperText="Main Text"
          fullWidth
          margin="normal"
          multiline={true}
          rows={3}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
                <TextField
          id="filled-full-width"
          label="Secondary Text"
          style={{ margin: 8 }}
         
          value={mySpecialities}
          onChange={(e)=> setmySpecialities(e.target.value)}
          helperText="second paragraph"
          fullWidth
          multiline={true}
          rows={3}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
           <Button onClick={addStaffMember}>Save Staff member</Button>
      <Button onClick={handleClose}>exit</Button>
      {/* </div>
      <div> */}
{/* <div><h2>How it will look</h2></div> */}
{/* <Paper className={classes.paper}> */}
    <Card
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
export default Staff;
// need to add id's to resources