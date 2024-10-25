import { useRef } from "react";
import { loadPlayer } from "rtsp-relay/browser";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  const start = async () => {
    if (!canvasRef.current) throw new Error("Ref is null");

    const res = await loadPlayer({
      url: "ws://localhost:2000/api/stream",
      canvas: canvasRef.current,
      autoplay: true,
    });

    res.play();
  };

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={start}>Click</button>

      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default App;
