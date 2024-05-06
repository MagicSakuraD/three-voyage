import React from "react";
import { useState, useRef } from "react";

const page = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    // set start time to now
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current as number);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10) as unknown as number;
    // every 10ms, update now
  }

  function handleStop() {
    clearInterval(intervalRef.current as number);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>时间过去了：{secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始计时</button>
      <button onClick={handleStop}>停止计时</button>
    </div>
  );
};

export default page;
