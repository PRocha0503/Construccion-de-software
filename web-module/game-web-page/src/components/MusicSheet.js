import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Typography,
  Box,
  CardActions,
  CardActionArea,
  Button,
  Grid,
  Container,
  Link,
} from "@material-ui/core";

function MusicSheet() {
  return (
    <>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "1vh",
          backgroundColor: "black",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "100%",
          minHeight: "100vh",
          backgroundColor: "#364954",
          alignItems: "center",
          alignText: "center",
          color: "white",
        }}
      >
        <Typography variant="h1">Game info</Typography>
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            justify="center"
            sx={{
              margin: "auto",
            }}
          >
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Simbolo.jpg"
                    alt="github logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Github repo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find the full project files and source code here!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/PRocha0503/Construccion-de-software"
                  >
                    <Button size="small" color="primary">
                      Repository
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.pinimg.com/originals/d0/53/f2/d053f2394d420d8d3712046f4e8f80cc.jpg"
                    alt="admin page"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Admin. Page
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Manage users, levels and games from our admin page!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://localhost:3001"
                  >
                    <Button size="small" color="primary">
                      Go to page
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://tympanus.net/codrops2016/img/Posts/drumkit.gif"
                    alt="music sheet"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Music Sheet
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Learn more about drumset music sheet and how to read them.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.schoolofrock.com/resources/drums/drum-notation-for-beginners"
                  >
                    <Button size="small" color="primary">
                      Go to video
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MusicSheet;
