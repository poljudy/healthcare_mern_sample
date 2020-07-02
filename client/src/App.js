import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// payment page not wroking
// import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './components/theme/Theme'
import Locations from './components/pages/Locations';
import Forum from './components/pages/Forum';
import Staff from './components/pages/Staff';
import AllTabs from './components/pages/AllTabs'
import Footer from './components/layout/Footer'
import Payment from './components/pages/Payment'
import ContactUs from './components/pages/ContactUs';
import Forms from './components/pages/Forms';
import Success from './components/pages/success';
import PayFail from './components/pages/PayFail';
import '@stripe/stripe-js';
// import Plans from './components/pages/Plans'
// import Checkout from './components/pages/Checkout'

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const useStyles = makeStyles(theme => ({
  // bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  // backgroundImage: 'https://oceanservice.noaa.gov/facts/ocean-human-health.jpg'
  outerContainer: {backgroundColor: "pink"},
  container: { 
    backgroundColor: theme.palette.primary.dark,
  // display: "stretch" 
},
  bg: {
    margin: 'auto',
  }
  // bg: {backgroundColor: theme.palette.primary.dark },
  // container: { backgroundColor: "#F2F2F2" }    floralwhite;
}));
const App = () => {
  const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <AuthState>
            <ContactState>
              <AlertState>
                  <Router>
                    <Fragment>
                      <Navbar />
                      <div className={classes.bg}>
                        <Alerts />
                        <Switch className={classes.container}>
                        
                          <PrivateRoute exact path="/admin" component={Home} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/login" component={Login} />
                          <Route exact path="/locations" component={Locations} />
                          <Route exact path="/forum" component={Forum} />
                          <Route exact path="/" component={AllTabs} />
                          <Route exact path="/staff" component={Staff} />
                          <Route exact path="/payment" component={Payment} />
                          <Route exact path="/contact" component={ContactUs} />
                          <Route exact path="/forms" component={Forms} />
                          <Route exact path="/home" component={AllTabs} />
                          <Route exact path="/success" component={Success} />
                          <Route exact path="/payfail" component={PayFail} />
                          {/* <Route exact path="/checkout" component={Checkout} />
                          <Route exact path="/plans" component={Plans} /> */}
                        </Switch>
                        <Footer />
                      </div>
                    </Fragment>
                  </Router>
              </AlertState>
            </ContactState>
        </AuthState>
        </ThemeProvider>
    );
};

export default App;
