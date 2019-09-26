import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import Typography from "@material-ui/core/Typography";

import treepic from "./img/tree.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 50
  },
  media: {
    height: 140
  }
});

const data = [{ text: "hello", id:1 }, { text: "goodby", id:2 }];

export default function MediaCard() {
  const classes = useStyles();

return (
    <Grid container direction="row" justify="center" alignItems="center">
  { data.map(post => (
        <Card className={classes.card} key={data.id}>
          <CardMedia
            component="img"
            image={treepic}
            title="Tree"
            height="200"
            alt="Title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.text}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.id}
            </Typography>
          </CardContent>
        </Card>
      ))}
      </Grid>
    );
};
