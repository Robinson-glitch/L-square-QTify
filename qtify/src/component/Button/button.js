import React from "react";
import { Button, IconButton, Stack,Typography } from "@mui/material";
import styles from "./button.module.css";

export default function button({btnText,targetComponent}) {
 return (<button className={styles.feedbackButton} onClick={targetComponent}>
         <Typography className={styles.buttonText}>{btnText}</Typography>
         </button>);
 }


