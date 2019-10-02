import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

import { Link } from "react-router-dom";

import dataexample from "./dataexample";

const Cards = ({ match }) => {
  const post = dataexample;

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{margin:"75px 0"}}>
      {post.map(postitem => (
        <Grid item key={postitem.id} xs={3}>
          <Card>
            <CardMedia
              component="img"
              image={postitem.image}
              title={postitem.text}
              height="200"
              alt={postitem.text}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {postitem.text}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {postitem.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`${match.url}${postitem.id}`}>Read more</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
