import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Chip
} from "@mui/material";
import LeftIcon from "../../assets/LeftIcon.png";
import React, {useImperativeHandle, useRef, forwardRef} from 'react'

const LeftNavbutton=forwardRef((props,ref)=>{
 
    return(
<IconButton
        ref={ref}
        sx={{
          position: "absolute",
          top: "45%",
          left: "-20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <img src={LeftIcon} alt="Previous" width={24} height={24} />
</IconButton>
        );


});
export default LeftNavbutton;