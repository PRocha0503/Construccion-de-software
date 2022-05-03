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
      <Grid container>
        <Button
          sx={{ marginRight: "7.5%" }}
          variant="contained"
          color="success"
          onClick={handleOnClickFullscreen}
        >
          Fullscreen
        </Button>
      </Grid>
      <Unity
        unityContext={unityContext}
        matchWebGLToCanvasSize={false}
        style={{
          width: "85%",
          height: "600px",
          borderRadius: "25px",
          marginBottom: "5%",
        }}
      />
    </>
  );
};

export default UnityGame;
