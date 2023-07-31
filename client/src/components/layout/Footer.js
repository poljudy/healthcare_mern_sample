import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactUs from "./ContactUs";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(8),
    paddingTop: "8px",
    paddingBottom: "8px",
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.dark,
      padding: "auto",
      marginTop: theme.spacing(2),
    },
  },
  box: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.main,
    borderColor: "grey.500",
    [theme.breakpoints.down("md")]: {
      borderColor: "none",
    },
  },
}));
const defaultProps = {
  m: 1,
  border: 1,
};
export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box {...defaultProps} className={classes.box}>
        <ContactUs />
      </Box>
    </footer>
  );
}
