import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme/Theme';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
    textAlign: 'center',
    // backgroundColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.secondary.main
    // maxWidth: 100
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      // textAlign: 'justify'
  }
  },
  pos: {
    marginBottom: 12,
  },
  theming: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      // textAlign: 'justify'
  }
  },
footer: {
  fontSize: 25,
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
    // textAlign: 'justify'
}
}
});

const Card1 = props => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent >
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
    {props.title}
        </Typography> */}
        <br />
        <Typography variant="subtitle1" component="h2" className={classes.title}>
        {props.title}
        </Typography>
        {!props.link3 ? null : (
<Link href={props.link3} target="_blank" rel="noopener">
        <Typography variant="subtitle2" component="p" className={classes.theming}>
          {props.main}
          <br />
          {props.main2}
          </Typography>
          </Link>
          )}
          {props.link3 ? null : (
            <Typography variant="subtitle2" component="p" className={classes.theming}>
          {props.main}
          <br />
          {props.main2}
          </Typography>
          )}
          <br />
          <Link href={"tel:" + props.link1} target="_blank" rel="noopener">
          <Typography className={classes.footer} variant="body2" color="textSecondary" gutterBottom>
          {props.link1}
        </Typography>
        </Link>
        <Link href={"mailto:" + + props.link2} target="_blank" rel="noopener">
        <Typography className={classes.footer} variant="body2" color="textSecondary" gutterBottom>
          {props.link2}
        </Typography>
        </Link>
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.link2}
        </Typography> */}
        {/* </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
export default Card1;