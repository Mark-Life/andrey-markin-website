import React from "react";

const Grains: React.FC = () => {
  return (
    <div
      style={{
        pointerEvents: "none",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('https://static.tildacdn.com/tild3265-3261-4333-a361-353739633737/noise.gif')",
        backgroundSize: "100px",
        backgroundRepeat: "repeat",
        opacity: 0.05,
      }}
    />
  );
};

export default Grains;
