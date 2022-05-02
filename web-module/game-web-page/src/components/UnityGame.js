import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
const unityContext = new UnityContext({
  loaderUrl: "../Unity/Build/Unity.loader.js",
  dataUrl: "../Unity/Build/Unity.data",
  frameworkUrl: "../Unity/Build/Unity.framework.js",
  codeUrl: "../Unity/Build/Unity.wasm",
});

const UnityGame = () => {
  useEffect(function () {
    unityContext.on("canvas", function (canvas) {
      canvas.width = 500;
      canvas.height = 250;
    });
  }, []);
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }

  return (
    <>
      <div className="game">
        <button onClick={handleOnClickFullscreen}>Fullscreen</button>
        <Unity
          unityContext={unityContext}
          matchWebGLToCanvasSize={false}
          style={{ width: "1366px", height: "768px" }}
        />
      </div>
      <p>Aqui deberia de estar el juego</p>
    </>
  );
};

export default UnityGame;
