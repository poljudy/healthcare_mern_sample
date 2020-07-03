import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme/Theme';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
    textAlign: 'center',
    // backgroundColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.primary.main
    // maxWidth: 100
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
    color: theme.palette.secondary.dark
  },
  pos: {
    // marginBottom: 12,
  },
  theming: {
    color: theme.palette.primary.main
  },
footer: {
  fontSize: 25
},
margin: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderWidth: 5 
  },
});

const CardWLink = props => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent >
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
    {props.title}
        </Typography> */}
        <br />
        <Typography variant="subtitle2" component="h2" className={classes.title}>
        {props.title}
        </Typography>
        {/* <Typography variant="subtitle2" component="p" className={classes.theming}>
          {props.main}
          <br />
          {props.main2}
          </Typography>
          <br /> */}
          {/* <Typography className={classes.footer} variant="body2" color="link" gutterBottom>
          <a target="_blank" href={props.link}>
         {props.linkTitle}</a>
          
        </Typography> */}
        {/* <Typography className={classes.footer} variant="body2" color="textSecondary" gutterBottom>
          {props.link2}
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.link2}
        </Typography> */}
        {/* </Typography> */}
      {/* <CardActions> */}
      <Button size="large" target="_blank" href={props.link} variant="outlined" className={classes.margin}>
      {props.linkTitle}</Button>
  
        {/* <Button size="small">Learn More</Button> */}
      {/* </CardActions> */}
      </CardContent>
    </Card>
  );
}
export default CardWLink;