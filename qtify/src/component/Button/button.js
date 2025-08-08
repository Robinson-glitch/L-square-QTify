import React from "react";
import { Button, IconButton, Stack,Typography } from "@mui/material";
import styles from "./button.module.css";

export default function button({btnText,targetComponent}) {
 return (
 <button className={styles.feedbackButton} onClick={targetComponent}>
<div className={styles.buttonText}>{btnText}</div>
 </button>
         
);
 }


