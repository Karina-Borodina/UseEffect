import React, { useState, useEffect } from "react";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, intervalValue);

    return () => clearInterval(interval);
  }, [intervalValue]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
}

function Component() {
  const [intervalValue, setIntervalValue] = useState(1000);

  const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="container">
      <Timer intervalValue={intervalValue} />
      <button variant="primary" onClick={() => handleIntervalClick(100)}>100ms</button>
      <button variant="primary" onClick={() => handleIntervalClick(500)}>500ms</button>
      <button variant="primary" onClick={() => handleIntervalClick(1000)}>1s</button>
    </div>
  );
}
export default Component;
