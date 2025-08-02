import React from "react";
import { Button, IconButton, Stack,Typography } from "@mui/material";
import "./button.css"



export default function button({btnText,targetComponent}) {
 return (<button className="button" onClick={targetComponent}>
         <Typography className="buttonText">{btnText}</Typography>
         </button>);
 }


