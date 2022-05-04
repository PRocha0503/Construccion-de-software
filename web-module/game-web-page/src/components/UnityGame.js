import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Typography, Container, Button, Box, Grid } from "@material-ui/core";

const unityContext = new UnityContext({
	loaderUrl: "../Unity/Build/Unity.loader.js",
	dataUrl: "../Unity/Build/Unity.data",
	frameworkUrl: "../Unity/Build/Unity.framework.js",
	codeUrl: "../Unity/Build/Unity.wasm",
	streamingAssetsUrl: "../Unity/StreamingAssets",
});

const UnityGame = () => {
	useEffect(function () {
		unityContext.on("canvas", function (canvas) {
			canvas.width = 1366;
			canvas.height = 768;
		});
	}, []);
	function handleOnClickFullscreen() {
		unityContext.setFullscreen(true);
	}

	return (
		<>
			<Container>
				<Grid container>
					<Button
						variant="contained"
						color="success"
						onClick={handleOnClickFullscreen}
					>
						Fullscreen
					</Button>
				</Grid>
			</Container>
			<Unity
				unityContext={unityContext}
				matchWebGLToCanvasSize={false}
				style={{
					width: "85%",
					height: "600px",
					borderRadius: "25px",
					marginBottom: "5%",
					marginTop: "1%",
				}}
			/>
		</>
	);
};

export default UnityGame;
