import React, { useState, useEffect } from "react";

export default function App() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const toggle = () => {
    setRunning((prev) => !prev);
  };

  const format = (secs) => {
    const mins = Math.floor(secs / 60);
    const remaingsecs = secs % 60;
    return `${mins}:${remaingsecs < 10 ? "0" : ""}${remaingsecs}`;
  };

  const reset = () => {
    setElapsed(0);
    setRunning(false);
  };
  useEffect(() => {
    let intervalid;
    if (running) {
      intervalid = setInterval(() => {
        setElapsed((preElapsed) => preElapsed + 1);
      }, 1000);
    } else {
      clearInterval(intervalid);
    }
    return () => clearInterval(intervalid);
  }, [running]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {format(elapsed)}</p>
      <button onClick={toggle}>{running ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
