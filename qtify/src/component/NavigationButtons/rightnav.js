import RightIcon from "../../assets/RightIcon.png";
import React, {useImperativeHandle, useRef, forwardRef} from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Chip
} from "@mui/material";

const RightNavbutton=forwardRef((props,ref)=>{
    return(
        <IconButton
        ref={ref}
        sx={{
          position: "absolute",
          top: "45%",
          right: "-5px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <img src={RightIcon} alt="Next" width={24} height={24} />
      </IconButton>
    );

});
export default RightNavbutton;