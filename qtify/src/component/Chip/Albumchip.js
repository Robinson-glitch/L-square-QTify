import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Chip
} from "@mui/material";



const Albumchipview=({album})=>{

    return(
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
                    />);
}
export default Albumchipview;