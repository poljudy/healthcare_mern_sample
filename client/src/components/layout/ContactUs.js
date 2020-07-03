import React, { useState } from "react";
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import theme from "../theme/Theme";
// import { CatalogInfoResponseLimits } from "square-connect";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { Button } from "@material-ui/core";

// FORMSPREE

// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       status: ""
//     };
//   }
const useStyles = makeStyles(theme => ({
footerTheme: {
    color: theme.palette.primary.dark,
    // margin: 5,
    // paddingTop: 8,
    // fontSize: 36
},
h1theme: {
    // color: theme.palette.secondary.dark,
    // paddingLeft: 40,
    // margin: 20,
    // marginTop: 40,
    textAlign: 'center',
    padding: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    }
  },
  }));
  
const sidebar = {
    title: 'Contact Us Here',
    description:
      '3101 American Legion Road, Suite 21B Chesapeake, VA 23321',
      // Email Us
      number: '(757) 483-3404 (for all offices)',
      email: 'office@cpc.hush.com',
}


const ContactUs = props => {

    const classes = useStyles();
    // const [status, setstatus] = useState("")

  // function submitForm(event) {
  //       event.preventDefault();
  //       const form = event.target;
  //       const data = new FormData(form);
  //       const xhr = new XMLHttpRequest();
  //       xhr.open(form.method, form.action);
  //       xhr.setRequestHeader("Accept", "application/json");
  //       xhr.onreadystatechange = () => {
  //           if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //           if (xhr.status === 200) {
  //               form.reset();
  //               setstatus("SUCCESS")
                
  //           } else {
  //               setstatus("ERROR")
  //           }
  //       };
  //       xhr.send(data);
  //   };

    //   render() {
    // const { status } = state;
    return (
        <>
            {/* <!-- add your custom form HTML here --> */}
            {/* <label>Email:</label>
            <input type="email" name="email" /> */}
            <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
  color={theme.palette.secondary.main}
  responsive={'true'}
//   className={classes.footerTheme}
>
        {/* <form
            onSubmit={submitForm}
            action="https://formspree.io/xgenapon"
            method="POST"
            color={theme.palette.secondary.main}
        >
        <Grid item={2}>
            <FormControl>
  <InputLabel htmlFor="Email">Email address</InputLabel>
  <Input type="email" name="email" id="my-input" aria-describedby="Email to reach out to you" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
</Grid>
<Grid item={4}>
        <FormControl>
  <InputLabel htmlFor="Message">Message</InputLabel>
  <Input type="textarea" name="message" id="textarea" aria-describedby="Message" />
  <FormHelperText id="my-helper-text">Questions, Comments & Concerns</FormHelperText>
</FormControl>
</Grid>
            {/* <label>Message:</label>
            <input type="text" name="message" /> */}
            {/* <Grid item={2}>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </Grid>
        </form> */} 
        <Grid item={true} id={sidebar._id} style={{textAlign: "center"}} >
        {/* <Button target="_blank"
                rel="noopener noreferrer"
                href="https://hushforms.com/contactcpc"> */}
        <Typography variant="subtitle2" >
          <Link 
          underline="always"
          className={classes.footerTheme}
          target="_blank"
                rel="noopener noreferrer"
                href="https://hushforms.com/contactcpc">
          {sidebar.title}
          </Link>
        </Typography>
        {/* </Button> */}
        {/* SOCIAL MEDIA */}

                <IconButton aria-label="Facebook" target="_blank"
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://www.facebook.com/Churchland-Psychological-Center-116786685049281">
            <FacebookIcon />
          </IconButton>

  <IconButton aria-label="Facebook" target="_blank"
                rel="noopener noreferrer" className={classes.footerTheme}
                href="https://www.linkedin.com/company/churchland-psychological-ctr/about/">
           
            <LinkedInIcon />
          </IconButton>

        <Typography variant="h6">{sidebar.description}</Typography>
        {/* <Typography variant="h6"> 
        
        <a href={"tel:" + sidebar.number}>{sidebar.number}</a>
        
        </Typography> */}
        <Button target="_blank"
                rel="noopener noreferrer" className={classes.footerTheme}
                href={"tel:" + sidebar.number}>{sidebar.number}</Button>

                 <Button target="_blank" color="inherit" 
                rel="noopener noreferrer" className={classes.footerTheme}
                href={"mailto:" + sidebar.email}>{sidebar.email}</Button>
        {/* <Typography variant="h6" color="secondary"> 
        
        <a href={"mailto:" + sidebar.email}>{sidebar.email}  </a>
     </Typography> */}
        </Grid>
            </Grid>
         
        </>
    );
    //   }

}
export default ContactUs