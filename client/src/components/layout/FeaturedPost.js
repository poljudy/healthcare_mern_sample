import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
    // textAlign: 'center',
    
  },
  cardMedia: {
    width: 160,
  },
  title: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: 26,
      // textAlign: 'justify'
  }
  },
body: {
  color: theme.palette.secondary.main
},
bodydesc: {
  fontSize: theme.typography.body2,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    textAlign: 'justify'
}
}
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
    
      {/* <CardActionArea component="a" href={"/userprofile"}> */}
        <Card className={classes.card} elevation={6}>
          {/* <div className={classes.cardDetails}> */}
            <CardContent className={classes.cardDetails}>
              <Typography component="h2" variant="subtitle2" className={classes.title}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="body2" paragraph className={classes.bodydesc}> 
                {post.description}
              </Typography>
              {/* <Link to={post.link}>
              <Typography variant="subtitle1" color="primary">
                Go Now
              </Typography>
              </Link> */}
            </CardContent>
          {/* </div> */}
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      {/* </CardActionArea> */}
      {/* </Link> */}
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};