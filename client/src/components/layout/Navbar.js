import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../Images/cpclogo2.png";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ForumIcon from "@material-ui/icons/Forum";
import PaymentIcon from "@material-ui/icons/Payment";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "inherit",
    [theme.breakpoints.up("lg")]: {
      fontSize: 50,
    },
    color: theme.palette.secondary.main,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    marginBottom: 0,
    paddingBottom: 0,
    textAlign: "center",
    width: "100%",
    height: "80%",
    objectFit: "contain",
  },
  logoDiv: {
    alignSelf: "center",
  },
  logoHorizontallyCenter: {
    objectFit: "contain",
    margin: 2,
    padding: 2,
    width: "50%",
    maxWidth: 400,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 3%)", // height: 150,
    position: "relative",
  },
  iconstyle: {
    color: theme.palette.primary.dark,
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/home"}>
          {" "}
          <HomeIcon />
          Home
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link to={"/userprofile"}>Profile </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/more"}>More </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/signin"}>Sign In</Link>

        <a href="/" onClick={logout}>
          Logout
        </a>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to={"/home"}>
        <MenuItem>
          <IconButton aria-label="Home" color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>

      <Link to={"/staff"}>
        <MenuItem>
          <IconButton aria-label="Staff" color="inherit">
            <GroupIcon />
          </IconButton>
          <p>Therapists</p>
        </MenuItem>
      </Link>

      <Link to={"/locations"}>
        <MenuItem>
          <IconButton aria-label="locations" color="inherit">
            <LocationOnIcon />
          </IconButton>
          <p>Locations</p>
        </MenuItem>
      </Link>

      <Link to={"/forms"}>
        <MenuItem>
          <IconButton aria-label="Forms" color="inherit">
            <NoteAddIcon />
          </IconButton>
          <p>Forms</p>
        </MenuItem>
      </Link>

      <Link to={"/forum"}>
        <MenuItem>
          <IconButton aria-label="Forum" color="inherit">
            <ForumIcon />
          </IconButton>
          <p>Forum</p>
        </MenuItem>
      </Link>

      <Link to={"/payment"}>
        <MenuItem>
          <IconButton aria-label="Payment" color="inherit">
            <PaymentIcon />
          </IconButton>
          <p>Pay</p>
        </MenuItem>
      </Link>

      <Link to={"/contact"}>
        <MenuItem>
          <IconButton aria-label="Contact" color="inherit">
            <ContactSupportIcon />
          </IconButton>
          <p>Contact</p>
        </MenuItem>
      </Link>
      {isAuthenticated ? (
        <Link to={"#!"} onClick={onLogout}>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
                color="secondary"
              >
                <ExitToAppIcon />
              </Badge>
            </IconButton>
            <p>Logout</p>
          </MenuItem>
        </Link>
      ) : (
        <div>
          <Link to={"/login"}>
            <MenuItem>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge
                  color="secondary"
                >
                  <ExitToAppIcon />
                </Badge>
              </IconButton>
              <p>Log In</p>
            </MenuItem>
          </Link>
          <Link to={"/register"}>
            <MenuItem>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge
                  color="secondary"
                >
                  <ExitToAppIcon />
                </Badge>
              </IconButton>
              <p>Register</p>
            </MenuItem>
          </Link>
        </div>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="relative" style={{ backgroundColor: "#008292" }}>
        <Toolbar>
          <div
            className={classes.logoHorizontallyCenter}
          >
            <Link to={"/home"}>
              <img
                src={logo}
                alt="Churchland Psychological Center"
                className={classes.logo}
              ></img>
            </Link>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.title}>
              {user && "Welcome " + user.name}
            </Typography>

            <IconButton
              edge="end"
              aria-label="Home"
              aria-controls={menuId}
              aria-haspopup="true"
              className={classes.iconstyle}
            >
              <Link to={"/home"} className={classes.iconstyle}>
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default Navbar;
