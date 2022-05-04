import { useState } from "react";

import Alert from "@mui/material/Alert";
import { Typography, Container, Box, Grid, adaptV4Theme } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PendingIcon from "@mui/icons-material/Pending";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import Screen from "./pages/Screen";

import Style from "./styles/style";

import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
	typography: {
		fontFamily: [
			"VT323",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"sans-serif",
		].join(","),
	},
}));

theme.typography.h2 = {
	fontSize: "4rem",
	fontFamily: "VT323",
};

function Admin() {
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
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        backgroundColor: "#AEA9BA",
                    }}
                >
                    {showAlert ? (
                        <Alert severity={alertMessage[0]} className={classes.alert}>
                            {alertMessage[1]}{" "}
                        </Alert>
                    ) : (
                        <></>
                    )}
                    <Container>
                        <Box sx={{ color: "#6959a2" }}>
                            <Typography variant="h2" component="h2">
                                Admin View
                            </Typography>
                        </Box>
                    </Container>

                    <BottomNavigation
                        showLabels
                        value={tab}
                        onChange={(event, newValue) => {
                            setTab(newValue);
                        }}
                        sx={{
                            backgroundColor: "#AEA9BA",
                        }}
                    >
                        <BottomNavigationAction label="Analytics" icon={<AnalyticsIcon />} />
                        <BottomNavigationAction label="Users" icon={<EmojiPeopleIcon />} />
                        <BottomNavigationAction label="Levels" icon={<PendingIcon />} />
                        <BottomNavigationAction label="Games" icon={<VideogameAssetIcon />} />
                    </BottomNavigation>
                    <Screen component={tab} alert={alert}></Screen>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Admin;
