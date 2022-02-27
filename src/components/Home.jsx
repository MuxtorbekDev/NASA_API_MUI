import React from "react";
import { Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import moment from "moment";
import FeedIcon from "@mui/icons-material/Feed";
import EventIcon from "@mui/icons-material/Event";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Home({ data }) {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md" disablePadding={true}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea width="600">
                <CardMedia
                  component="img"
                  height="300"
                  image={data.url}
                  alt={data.media_type}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <FeedIcon color="primary" />
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <EventIcon color="primary" />
                    {moment(data.date).format("YYYY MM DD")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/HomeMore`}>
                  <Button variant="outlined" size="small" color="primary">
                    Leran More
                    <ReadMoreIcon color="primary" />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
