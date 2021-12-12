import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Contact from "../components/contactCard";
import AddContact from "../components/addContact";
import CenterGrid from "../components/centerGridLayout";
export default function Favourite(props) {
  const { favourites } = useSelector((state) => state);
  console.log("----------------favourites----", favourites);
  return (
    <CenterGrid>
      <Grid container xs={12} sm={12} md={4}>
        <Grid item xs={12} md={12}>
          <Link to="/">HOME</Link>
          <h1> Contact Favourite</h1>
        </Grid>
        {favourites?.map((item, i) => (
          <Contact item={item} key={i} />
        ))}
        {(favourites?.length === 0 || !favourites) && (
          <Typography variant="body" component="p">
            No Favourite Contact Found Please Add one
          </Typography>
        )}
      </Grid>
    </CenterGrid>
  );
}
