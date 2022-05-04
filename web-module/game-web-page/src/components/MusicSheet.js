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
} from "@mui/material";
import { Link } from "react-router-dom";

function MusicSheet() {
	return (
		<>
			<Box
				sx={{
					minWidth: "1vw",
					minHeight: "1vh",
					backgroundColor: "black",
				}}
			></Box>
			<Box
				sx={{
					minHeight: "100vh",
					minWidth: "1vw",
					backgroundColor: "#364954",
					color: "white",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "40vh",
						alignItems: "center",
						justifyContent: "center",
						alignText: "center",
						color: "white",
					}}
				>
					<Typography variant="h1">Game info</Typography>
				</Box>

				<Grid container xs={11}>
					<Grid item xs={1}></Grid>
					<Grid item xs={3}>
						<Card sx={{ maxWidth: 300 }} xs>
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
								<Button
									size="small"
									color="primary"
									onClick={() => {
										window.open(
											"https://github.com/PRocha0503/Construccion-de-software",
											"_blank"
										);
									}}
								>
									Repository
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={3}>
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
								<Link to="admin">
									<Button size="small" color="primary">
										Go to page
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid container item xs={3}>
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
								<Button
									size="small"
									color="primary"
									onClick={() => {
										window.open(
											"https://www.schoolofrock.com/resources/drums/drum-notation-for-beginners",
											"_blank"
										);
									}}
								>
									Go to video
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Box>
		</>
	);
}

export default MusicSheet;
