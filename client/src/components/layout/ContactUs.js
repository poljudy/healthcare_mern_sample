import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../theme/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerTheme: {
    color: theme.palette.primary.dark,
  },
  h1theme: {
    textAlign: "center",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 35,
    },
  },
}));

const sidebar = {
  title: "Contact Us Here",
  description: "3101 American Legion Road, Suite 21B Chesapeake, VA 23321",
  number: "(757) 483-3404 (for all offices)",
  email: "office@cpc.hush.com",
};

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        color={theme.palette.secondary.main}
        responsive={"true"}
      >
        <Grid item={true} id={sidebar._id} style={{ textAlign: "center" }}>
          <Typography variant="subtitle2">
            <Link
              underline="always"
              className={classes.footerTheme}
              target="_blank"
              rel="noopener noreferrer"
              href="https://hushforms.com/contactcpc"
            >
              {sidebar.title}
            </Link>
          </Typography>
          <IconButton
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footerTheme}
            href="https://www.facebook.com/Churchland-Psychological-Center-116786685049281"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footerTheme}
            href="https://www.linkedin.com/company/churchland-psychological-ctr/about/"
          >
            <LinkedInIcon />
          </IconButton>

          <Typography variant="h6">{sidebar.description}</Typography>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footerTheme}
            href={"tel:" + sidebar.number}
          >
            {sidebar.number}
          </Button>

          <Button
            target="_blank"
            color="inherit"
            rel="noopener noreferrer"
            className={classes.footerTheme}
            href={"mailto:" + sidebar.email}
          >
            {sidebar.email}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default ContactUs;
