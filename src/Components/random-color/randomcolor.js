import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

function RandomColor() {
  const [color, setColor] = useState("");
  const [type, setType] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    //# followed by 6 digits
    let newColor = "#";
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; ++i) {
      newColor += hex[randomColorUtility(hex.length)];
    }
    setColor(newColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    let newColor = `rgb(${r}, ${g}, ${b})`;
    setColor(newColor);
  }

  useEffect(() => {
    if (type === "hex") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [type]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <button
          onClick={() => {
            setType("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button
          onClick={() => {
            setType("hex");
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={
            type === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Rndom Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{type === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
