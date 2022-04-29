import { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PendingIcon from "@mui/icons-material/Pending";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import Screen from "./pages/Screen";

import Style from "./styles/style";
function App() {
	const classes = Style();
	const [tab, setTab] = useState(0);
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
					Admin View
				</Typography>
			</Box>

			<BottomNavigation
				showLabels
				value={tab}
				onChange={(event, newValue) => {
					setTab(newValue);
				}}
			>
				<BottomNavigationAction label="Analytics" icon={<AnalyticsIcon />} />
				<BottomNavigationAction label="Users" icon={<EmojiPeopleIcon />} />
				<BottomNavigationAction label="Levels" icon={<PendingIcon />} />
				<BottomNavigationAction label="Games" icon={<VideogameAssetIcon />} />
			</BottomNavigation>
			<Screen component={tab} alert={alert}></Screen>
		</Box>
	);
}

export default App;
