import { useState } from "react";
import Users from "./components/Users";
import Levels from "./components/Levels";
import Game from "./components/Game";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import Style from "./styles/style";
function App() {
	const classes = Style();
	const [showUsers, setShowUsers] = useState(false);
	const [showLevels, setShowLevels] = useState(false);
	const [showGames, setShowGames] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState(["", ""]);

	const alert = (error, message) => {
		setShowAlert(true);
		console.log(error, message);
		setAlertMessage([error ? "error" : "success", message.data.msg]);
	};
	const toggle = (set, value) => {
		set(!value);
	};
	return (
		<Box className={classes.main}>
			{showAlert ? (
				<Alert severity={alertMessage[0]} className={classes.alert}>
					{alertMessage[1]}{" "}
				</Alert>
			) : (
				<></>
			)}

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
			{showUsers ? <Users alert={alert}></Users> : <></>}
			{showLevels ? <Levels alert={alert}></Levels> : <></>}
			{showGames ? <Game alert={alert}></Game> : <></>}
		</Box>
	);
}

export default App;
