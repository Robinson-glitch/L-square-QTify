// import styles from "./Hero.module.css";
import { Button, IconButton, Stack,Typography,Box } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Chip from '@mui/material/Chip';
import GridAlbumView from "../AlbumGrid/GridView";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination} from "swiper/modules";
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 



const CardComponent=()=>{

 return(
<Box sx={{width:"1384px",height:"848px",position:"absolute",left:"32px",Gap:"32px"}}>
 <GridAlbumView
 fetchurl="https://qtify-backend-labs.crio.do/albums/top"
 headerText="Top Albums"
  />
 <GridAlbumView
fetchurl="https://qtify-backend-labs.crio.do/albums/new"
headerText="New Albums"
  />
</Box>
  )
};
export default CardComponent;
