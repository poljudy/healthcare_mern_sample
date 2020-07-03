import React, { Fragment, useContext } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';


import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../Images/cpclogo2.png"
import IconButton from '@material-ui/core/IconButton';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import MoreIcon from '@material-ui/icons/More';
// import Divider from '@material-ui/core/Divider';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ForumIcon from '@material-ui/icons/Forum';
import PaymentIcon from '@material-ui/icons/Payment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
       
      },
      fontSize: "inherit",
      [theme.breakpoints.up("lg")]: {
        fontSize: 50
      },
      color: theme.palette.secondary.main,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "100%"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    logo: {
      // width: 355,
      // height: 150,
      // marginTop: 5,
      // marginLeft: 60,
      marginBottom: 0,
      paddingBottom: 0,
      textAlign: 'center',
    width: '100%',
    height: '80%',
    objectFit: 'contain',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: '50%',
    },
    logoDiv: {
      alignSelf: "center"
    },
    logoHorizontallyCenter: {
      objectFit: 'contain',
      // alignSelf: 'center'
      margin: 2,
      padding:2,
      // marginBottom: 5,
      // marginBottom: 0,
      // paddingBottom: 0,
      // marginRight: 30,
       width: '50%',
       maxWidth: 400,
      //  position: 'absolute', 
       left: '50%', 
       top: '50%',
       transform: 'translate(-50%, 3%)'
  ,    // height: 150,

      position: 'relative', 
      // left: '37.5%', 
      // [theme.breakpoints.down('md')]: {
      // left: '10%',
    //   width: 'auto'
    // },
    // [theme.breakpoints.down('sm')]: {
    //   left: '2%',
    //   width: 'auto'
    // }
    },
    iconstyle: {
      color: theme.palette.primary.dark,
    }
  }));
  const Navbar = props => {
// const Navbar = ({ title, icon }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = event => {
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

    // const authLinks = (
    //     <Fragment>
    //         <li>Hello { user && user.name }</li>
    //         <li>
    //             <a href="#!" onClick={onLogout}>
    //                 <i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
    //             </a>
    //         </li>
    //     </Fragment>
    // );

    // const guestLinks = (
    //     <Fragment>
    //         <li>
    //             <Link to='/register'>Register</Link>
    //         </li>
    //         <li>
    //             <Link to='/login'>Login</Link>
    //         </li>
    //     </Fragment>
    // );

//     return (
//         <div className="navbar bg-primary">
//             <h1><i className={icon} /> {title}</h1>
//             <ul>{ isAuthenticated ? authLinks : guestLinks }</ul>
//         </div>
//     );
// };

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string
// };

// Navbar.defaultProps = {
//     title: 'Contact Keeper',
//     icon: 'fas fa-id-card-alt'
// };
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
     
        <Link to={"/home"}>  <HomeIcon />Home</Link>
      </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>
        <Link to={"/marketplace"}>Marketplace</Link>
      </MenuItem> */}

      {/* <MenuItem onClick={handleClose}><Link to={"/blog"}>Blog</Link></MenuItem> */}
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/userprofile"}>Profile </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/more"}>More </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
      {/* {!loggedIn ? true : ( */}
        <Link to={"/signin"}>Sign In</Link>
      {/* )}   */}
    
        <a href="/" onClick={logout}>
          Logout
        </a>
      
      </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>
        <a href="/" onClick={logout}>
          Logout
        </a>
      </MenuItem> */}
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
            {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/home"}>Home</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/userprofile"}>Profile  </Link></MenuItem> */}
                {/* <MenuItem onClick={handleClose}><Link to={"/blog"}>Blog</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/gamepage"}>Games</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/more"}>Features</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><a href="/" onClick={logout}>Logout</a></MenuItem> */}

                <Link to={"/home"}>
                <MenuItem>
                <IconButton aria-label="Home" color="inherit">
            {/* <Logo /> */}
            <HomeIcon /></IconButton> <p>Home</p></MenuItem></Link>


          <Link to={"/staff"}>
                <MenuItem>
                <IconButton aria-label="Staff" color="inherit">
            {/* <Logo /> */}
            <GroupIcon />
          </IconButton><p>Therapists</p></MenuItem></Link>

          <Link to={"/locations"}>
                <MenuItem>
                <IconButton aria-label="locations" color="inherit">
            {/* <Logo /> */}
            <LocationOnIcon />
          </IconButton><p>Locations</p></MenuItem></Link>

          <Link to={"/forms"}>
                <MenuItem>
                <IconButton aria-label="Forms" color="inherit">
            {/* <Logo /> */}
            <NoteAddIcon />
          </IconButton><p>Forms</p></MenuItem></Link>

          <Link to={"/forum"}>
                <MenuItem>
                <IconButton aria-label="Forum" color="inherit">
            {/* <Logo /> */}
            <ForumIcon />
          </IconButton><p>Forum</p></MenuItem></Link>

          <Link to={"/payment"}>
                <MenuItem>
                <IconButton aria-label="Payment" color="inherit">
            {/* <Logo /> */}
            <PaymentIcon />
          </IconButton><p>Pay</p></MenuItem></Link>

          <Link to={"/contact"}>
                <MenuItem>
                <IconButton aria-label="Contact" color="inherit">
            {/* <Logo /> */}
            <ContactSupportIcon />
          </IconButton><p>Contact</p></MenuItem></Link>

          {/* <Link to={"/home"}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
          </Link> */}
{/* <Link to={"/more"}><MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge
        //    badgeContent={4}
           color="secondary">
            <MoreIcon />
          </Badge>
        </IconButton>
        <p>Features</p>
      </MenuItem></Link> */}

             
      {/* <Link to={"/userprofile"}>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      </Link> */}
      {/* {!logIn ? false : ( */}
      { isAuthenticated ? 
        <Link to={"#!"} onClick={onLogout}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <ExitToAppIcon />
          </Badge></IconButton><p>Logout</p></MenuItem></Link> 
          :
          <div>
          <Link to={"/login"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <ExitToAppIcon />
          </Badge></IconButton><p>Log In</p></MenuItem></Link>
          <Link to={"/register"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <ExitToAppIcon />
          </Badge></IconButton><p>Register</p></MenuItem></Link>
          </div>
          }
              
      {/* )} */}
      {/* {logIn ? false : ( */}
                {/* <Link to={"/login"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <ExitToAppIcon />
          </Badge></IconButton><p>Log In</p></MenuItem></Link> */}
          {/* { isAuthenticated ? authLinks : guestLinks } */}

      {/* )} */}
    </Menu>
  );
// end mobile
  return (
    <div className={classes.grow}>
      <AppBar position="relative" style={{backgroundColor: '#008292'}}>
        <Toolbar>
    {/* add if admin then show list of options to do */}
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleProfileMenuOpen}
            <MenuIcon />
          >
          </IconButton> */}
     {/* end of admin */}
     {/* <Link to={"/home"}> */}
     {/* <Card >
     <CardMedia
        className={classes.media}
        src={logo}
        title="logo"
      />
    </Card> */}
{/* // </Link> */}










<div className={classes.logoHorizontallyCenter}
  // style={{
  //       position: 'absolute', 
  //       left: '50%', 
  //       top: '50%',
  //       transform: 'translate(-50%, -50%)'
  //   }}
>
     <Link to={"/home"} >
{/* <Avatar variant="square" alt="Churchland Psychological Center" src={logo} className={classes.logo}/> */}
         <img src={logo} alt="Churchland Psychological Center" className={classes.logo}></img>
          {/* <Typography className={classes.title} variant="h1" noWrap>
          Churchland Psychological Center
          </Typography> */}
          </Link>
          </div>
        
          {/* <Link to={"/home"}>
<Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
</Link> */}
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          {/* <div className={classes.search}> */}
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            {/* <InputBase
              placeholder="Search Any Character"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            /> */}
            {/* <Searchbar /> */}
          {/* </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              {/* <Link to={"/marketplace"}> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge 
        //   badgeContent={11} 
          color="secondary">
           
          </Badge>
        </IconButton>
        <p>Sign In</p>
      </MenuItem> */}
      {/* </Link> */}
      {/* <IconButton
              edge="end"
              aria-label="forms"
              aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Link to={"/forms"}>
              Forms
              </Link>
              </IconButton>
              <Divider />
      <IconButton
              edge="end"
              aria-label="contact"
              aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            > */}
            
              {/* <AccountCircle /> */}
              {/* <Typography variant="h6" className={classes.title}>
    </Typography> */}

              <Typography variant="h6" className={classes.title}>
              {/* <Link to={"/contact"}>
              Contact Us
              </Link> */}
              { user && "Welcome "+ user.name }
    </Typography>
              
              
            {/* </IconButton> */}
            <IconButton
              edge="end"
              aria-label="Home"
              aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              // color="secondary"
              className={classes.iconstyle}
            >
            <Link to={"/home"} className={classes.iconstyle}>
              <HomeIcon />
              </Link>
            </IconButton>
            {/* <br /> */}
            {/* copy of menu */}
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            {/* copy of menu */}

            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
            //    badgeContent={4}
                color="secondary">
                <Link to={"/signin"}>
                <ExitToAppIcon />
                </Link>
              </Badge>
            </IconButton> */}
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
}
export default Navbar;