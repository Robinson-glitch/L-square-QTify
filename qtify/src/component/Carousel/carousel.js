import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Chip
} from "@mui/material";
import Leftnav from "../NavigationButtons/leftnav";
import Rightnav from "../NavigationButtons/rightnav";

import { useRef, useEffect, useState } from "react";

import LeftIcon from "../../assets/LeftIcon.png";
import RightIcon from "../../assets/RightIcon.png";

const Carousel = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [navigation, setNavigation] = useState({});

  return (

    
    <Box position="relative" sx={{ width: "100%", padding: "20px 0" }}>
      {/* Custom Left Button */}
    <Leftnav ref={prevRef}/>

      {/* Custom Right Button */}
     <Rightnav ref={nextRef}/>



      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={24}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          setSwiperReady(true);
        }}
        pagination={{ clickable: true }}
      >
        {items?.length &&
          items.map((album) => (
            <SwiperSlide key={album.id}>
              <Box sx={{ width: "159px", height: "232px" }}>
                <Card
                  sx={{
                    width: "159px",
                    height: "205px",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={album.image}
                    sx={{
                      width: "159px",
                      height: "170px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: "4px 8px 4px 8px !important",
                    }}
                  >
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
                        padding: 0,
                        fontSize: "10px",
                        lineHeight: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "& .MuiChip-label": {
                          padding: 0,
                        },
                      }}
                      componentsProps={{
                        label: {
                          sx: {
                            padding: "0px !important",
                          },
                        },
                      }}
                    />
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    paddingTop: "4px",
                    fontFamily: "Poppins !important",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "100%",
                    color: "#FFFFFF",
                  }}
                >
                  <Typography>{album.slug}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
