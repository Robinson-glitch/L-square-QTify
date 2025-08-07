import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import CardComponent from "../Card/CardComponent"
 import "../Album/Albumpage.module.css"


const Albumpage=({searchData})=>{

    return(
    <Box sx={{width:"100%",height:"100%"}}>
   <Navbar searchData={searchData}/>
   <Hero/>
  <CardComponent/>
   </Box>
    );
}
export default Albumpage;