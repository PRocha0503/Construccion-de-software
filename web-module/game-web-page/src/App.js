import "./App.css";
import UnityGame from "./components/UnityGame";
import MusicSheet from "./components/MusicSheet";
import { Typography, Box, adaptV4Theme } from "@mui/material";
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
	palette: {
		primary: {
			main: "#AEA9BA",
		},
	},
}));

function App() {
	return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        backgroundColor: "#AEA9BA",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        alignItems: "center",
                        justifyContent: "center",
                        alignText: "center",
                        color: "#6959a2",
                    }}
                >
                    <Typography variant="h1">Unity Game</Typography>
                    <UnityGame></UnityGame>
                </Box>
                <MusicSheet></MusicSheet>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
