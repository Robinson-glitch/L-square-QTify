import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "../../component/Navbar/Navbar"
import Hero from "../../component/Hero/Hero"

const album=(searchData)=>{

    return(
    <Box>
   <Navbar searchData={searchData}/>
   <Hero/>
   </Box>
   
    );
}
export default album;