import { useState } from "react";
import Users from "./components/Users";
import Levels from "./components/Levels";
import Game from "./components/Game";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";

import Style from "./styles/style";
function App() {
	const classes = Style();
	const [showUsers, setShowUsers] = useState(false);
	const [showLevels, setShowLevels] = useState(false);
	const [showGames, setShowGames] = useState(false);
	const toggle = (set, value) => {
		set(!value);
	};
	return (
		<Box className={classes.main}>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Endpoints Check
				</Typography>
			</Box>
			<Box className={classes.container}>
				<Button onClick={() => toggle(setShowUsers, showUsers)}>User</Button>
				<Button onClick={() => toggle(setShowLevels, showLevels)}>
					Levels
				</Button>
				<Button onClick={() => toggle(setShowGames, showGames)}>Games</Button>
			</Box>
			{showUsers ? <Users></Users> : <></>}
			{showLevels ? <Levels></Levels> : <></>}
			{showGames ? <Game></Game> : <></>}
		</Box>
	);
}

export default App;
