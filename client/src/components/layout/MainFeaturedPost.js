import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: 470
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    // backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    color: '#828789',
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
      minHeight: 350,
    },
  },
  titletheme: {
    fontSize: theme.typography.h1,
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      display: 'flex',
      overflow: 'auto',
      whiteSpace: 'normal',
    },
  },
  desctheme: {
    fontSize: theme.typography.subtitle2,
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      display: 'flex',
      overflow: 'auto',
      whiteSpace: 'normal',
    },
  },
  imgtheme: {
    width: '100%',
    height: 'auto'
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img className={classes.imgtheme} style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      {/* <div className={classes.overlay} /> */}
      <Grid container  className={classes.overlay} >
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.titletheme} component="h1" variant="h1" color="inherit">
              {post.title}
            </Typography>
            <Typography className={classes.desctheme} variant="subtitle2" color="inherit" paragraph>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href={"/forms"}>
              {post.linkText}
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};