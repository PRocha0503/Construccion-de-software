import "./App.css";
import UnityGame from "./components/UnityGame";
import MusicSheet from "./components/MusicSheet";
import { Typography, Box } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "VT323",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
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
  );
}

export default App;
