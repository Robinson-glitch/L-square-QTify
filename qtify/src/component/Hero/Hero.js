import React from "react";
import styles from "./Hero.module.css";
import { Button, IconButton, Stack,Typography } from "@mui/material";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.herocontent}>
      <div className={styles.textWrapper}>
        <Typography className={styles.text}>100 Thousand Songs, ad-free</Typography>
        <Typography className={styles.text}>Over thousands podcast episodes</Typography>
      </div>
      <div>
        <img
          src={require("../../assets/hero_headphones.png")}
          width={212}
          alt="headphones"
        />
      </div>
      </div>
    </div>
  );
}

export default Hero;
