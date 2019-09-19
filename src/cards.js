import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:50,
  },
  media: {
    height: 140,
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center">
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="img/cards/tree.jpg"
          title="Tree"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tree
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Green leaf tree under blue sky
          </Typography>
        </CardContent>
    </Card>
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Tree"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tree
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Green leaf tree under blue sky
          </Typography>
        </CardContent>
    </Card>
</Grid>
  );
}