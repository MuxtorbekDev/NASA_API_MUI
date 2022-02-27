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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ItemHome({ data }) {
  const history = useHistory();

  const handleBack = () => history.goBack();

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md" disablePadding={true}>
        <Typography sx={{ display: "block", padding: "25px" }}>
          <Button
            onClick={handleBack}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={8}>
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
                <Typography variant="h7" component="div">
                  {data.explanation}
                </Typography>
              </CardActions>
              <Typography
                sx={{ display: "flex", padding: "25px", gap: " 15px" }}
              >
                <FavoriteBorderIcon fontSize="large" />
                <ShareIcon fontSize="large" />
                <AddCommentIcon fontSize="large" />
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
