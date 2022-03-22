import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import IsLoggedIn from "../IsLoggedIn";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Container } from "@material-ui/core";

function Home() {

     const navigate = useNavigate();

     useEffect(() => {
          IsLoggedIn.find((value) => navigate(value));
        //   alert(state.isLoggedOut);
     }, []);

     return (
          <>
               <Navbar title="Home" />
               <Container>
                    <Grid container spacing={1} style={{ marginTop: "100px" }}>
                         {itemData.map((item, index) => (
                              <Grid item xs={3} key={index}>
                                   <ImageListItem key={item.img} style={{ display: "flex", justifyContent: "center" }}>
                                        <div>
                                             <img
                                                  src={`${item.img}?w=248&fit=crop&auto=format`}
                                                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.title}
                                                  loading="lazy"
                                             />
                                             <ImageListItemBar
                                                  title={item.title}
                                                  subtitle={<span>by: {item.author}</span>}
                                                  position="below"
                                             />
                                        </div>
                                   </ImageListItem>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </>
     );
}

const itemData = [
     {
          img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          title: "Breakfast",
          author: "@bkristastucchio",
     },
     {
          img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
          title: "Burger",
          author: "@rollelflex_graphy726",
     },
     {
          img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
          title: "Camera",
          author: "@helloimnik",
     },
     {
          img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
          title: "Coffee",
          author: "@nolanissac",
     },
     {
          img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
          title: "Hats",
          author: "@hjrc33",
     },
     {
          img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
          title: "Honey",
          author: "@arwinneil",
     },
     {
          img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
          title: "Basketball",
          author: "@tjdragotta",
     },
     {
          img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
          title: "Fern",
          author: "@katie_wasserman",
     },
     {
          img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
          title: "Mushrooms",
          author: "@silverdalex",
     },
     {
          img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
          title: "Tomato basil",
          author: "@shelleypauls",
     },
     {
          img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
          title: "Sea star",
          author: "@peterlaster",
     },
     {
          img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
          title: "Bike",
          author: "@southside_customs",
     },
];

export default Home;
