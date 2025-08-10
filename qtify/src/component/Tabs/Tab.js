import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
// import styles from "./Navbar.module.css";
import { Button, IconButton, Stack,Typography,Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState} from "react";
import Carousel from "../Carousel/carousel.js"
import axios from "axios";


const TabView=({items})=> {

    const[value, setvalue]=useState("all");
    const[genres,setgenres]=useState([]);
  
  
   
    useEffect(()=>{
        
    const fetchgeners=async()=>{
        try{
   const response= await axios.get("https://qtify-backend-labs.crio.do/genres");
   setgenres(prev => [{key:'all',label:'All'}, ...response.data.data]);
        }
        catch(Error){
console.log(Error);
        }
}


    fetchgeners();
    },[]);


  const handleChange=(event,newvalue)=>{

setvalue(newvalue);

};
    
function CustomTabPanel({items, activeValue, tabValue}){
  const[filteredSongs, setfilteredSongs]=useState([]);

 useEffect(()=>{
if(!items.length||activeValue==="all") return;
setfilteredSongs(items.filter((song)=>song.genre.key===activeValue));
 },[activeValue,items]);
  return (
    <div
      role="tabpanel"
      hidden={activeValue !== tabValue}
      id={`simple-tabpanel-${tabValue}`}
      aria-labelledby={`simple-tab-${tabValue}`}
    >
    <Carousel items={activeValue==="all"?items:filteredSongs} carouselsongtype={true}/>
    </div>
  );

}
  return (
     <Box sx={{ width: '100%' }}>
    <Tabs
    sx={{
    "& .MuiTabs-indicator": {
      backgroundColor:"#34C94B",
    }
  }}
     value={value} onChange={handleChange} aria-label="basic tabs example">
{genres.length?genres.map((genre,index)=>(

          <Tab sx={{color:"#FFFFFF"}} key={genre.key} label={genre.label} value={genre.key} id={`simple-tab-${genre.key}`} aria-controls={`simple-tabpanel-${genre.key}}`} />
 )):"null"}
 </Tabs>
{genres.length?genres.map((genre,index)=>(
      <CustomTabPanel key={genre.key} items={items} activeValue={value} tabValue={genre.key}/>)):"null"}
</Box>
  );
}
export default TabView;
