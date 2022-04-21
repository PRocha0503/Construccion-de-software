import Users from "./components/Users";
import Levels from "./components/Levels";
import Game from "./components/Game";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";

import Style from "./styles/style";
function App() {
	const classes = Style();
	return (
		<Box className={classes.main}>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Endpoints Check
				</Typography>
			</Box>
			<Users></Users>
			<Levels></Levels>
			<Game></Game>
		</Box>
	);
}

export default App;
