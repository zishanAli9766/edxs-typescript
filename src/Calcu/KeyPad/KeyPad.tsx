import { Grid, Typography } from "@mui/material";
import React from "react";

import "./KeyPad.css";

function KeyPad(props: any) {
  const keys = [
    {
      keyCode: 55,
      label: "7",
    },
    {
      keyCode: 56,
      label: "8",
    },
    {
      keyCode: 57,
      label: "9",
    },
    {
      keyCode: 52,
      label: "4",
    },
    {
      keyCode: 53,
      label: "5",
    },
    {
      keyCode: 54,
      label: "6",
    },
    {
      keyCode: 49,
      label: "1",
    },
    {
      keyCode: 50,
      label: "2",
    },
    {
      keyCode: 51,
      label: "3",
    },
    {
      keyCode: 48,
      label: "0",
    },
    {
      keyCode: 190,
      label: ".",
    },
    {
      keyCode: 13,
      label: "=",
    },
  ];

  const symbols = [
    {
      label: "⌫",
      keyCode: 8,
      value: "backspace",
    },
    {
      label: "÷",
      keyCode: 111,
      value: "/",
    },
    {
      label: "×",
      keyCode: 56,
      value: "*",
    },
    {
      label: "﹣",
      keyCode: 109,
      value: "-",
    },
    {
      label: "+",
      keyCode: 107,
      value: "+",
    },
  ];


  return (
    <Grid className="keypad">
      <Grid style={{flex:3,display:"flex",flexWrap:"wrap"}}>
        {keys.map((item, index) => (
          <Typography style={{ width: '33%', height: "25%" }}
            onClick={() => props.handleKeyPress(item.keyCode, item.label)}
            key={index}
          >
            {item.label}
          </Typography>
        ))}
      </Grid>

      <Grid style={{ flex: "1" }}>
        {symbols.map((item, index) => (
          <Typography style={{ color: "#89a5f1", width: '100%', height: "20%" }}
            onClick={() => props.handleKeyPress(item.keyCode, item.value)}
            key={index}
          >
            {item.label}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default KeyPad;
