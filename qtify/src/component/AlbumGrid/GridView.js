// import styles from "./Hero.module.css";
import { Typography,Box } from "@mui/material";
import Chip from '@mui/material/Chip';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useEffect, useState} from "react";
import Carousel from "../Carousel/carousel.js"
import axios from "axios";

const GridAlbumView=({fetchurl,headerText})=>{

  const[AlbumData,setAlbumData]=useState([]);
    const[showAllflag, setShowAllflag]=useState(false);
    const[showText,setshowText]=useState("Show All");

    useEffect(()=>{
    fetchAlbum();

},[]);

const fetchAlbum=async()=>{
    try{
      const response=await axios.get(fetchurl);
      console.log(response.data);
      setAlbumData(response.data);
    }
    catch(Error){

      console.log(Error);
    }

  }
return(
 <Box sx={{mt:"48px"}}>
 <Box sx={{display:"flex",justifyContent:"space-between"}}>
<Typography sx={{fontFamily:"Poppins",fontWeight:"600",fontStyle:"SemiBold",fontSize:"20px",lineHeight:"100%",color:"#FFFFFF"}}>{headerText}</Typography>
<Typography onClick={()=>{
  if(showAllflag===true){
    setShowAllflag(false);
    setshowText("Show All")
  }
  else{
    setShowAllflag(true);
    setshowText("Collapse");
  }
}} sx={{fontFamily:"Poppins",fontWeight:"600",fontStyle:"SemiBold",fontSize:"20px",color:"#FFFFFF"}}>{showText}</Typography>
</Box>
<Grid container sx={{mt:"12px",ml:"12px",gap:"24px"}}>
{showAllflag&&AlbumData?.length?(AlbumData.map((album,index)=> (
  <Grid item key={album.id}>
  <Box sx={{width:"159px" ,height:"232px"}}>
  <Card 
   sx={{
      width: "159px",
      height:"205px",
      borderRadius:"10px",
    }}
    >
  <CardMedia 
  component="img"
    image={album.image}
    sx={{ 
      width: "159px",
      height:"170px",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px",
    }}
     />
     <CardContent sx={{padding:"4px 8px 4px 8px !important"}}>   
     <Chip 
    
        label={`${album.follows} Follows`}
  sx={{
    width: "71px",
    height: "23px",
    borderRadius: "10px",
    backgroundColor: "#121212",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    padding:0,
    fontSize: "10px",
    lineHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiChip-label": {
      padding: 0,
    }
  }}
   componentsProps={{
    label: { sx: { padding: "0px !important", } }
  }}
   />

    </CardContent>
    </Card>
    <Box  sx={{paddingTop:"4px",fontFamily:"Poppins !important",fontWeight:400,fontSize:14,lineHeight:"100%",color:"#FFFFFF",}}>
       <Typography>{album.slug}</Typography>
    </Box>
    </Box>
    </Grid>))):((!showAllflag)&&AlbumData?.length?(<Carousel items={AlbumData}/>):"null")}
    </Grid>
</Box>);
}


 export default GridAlbumView;
