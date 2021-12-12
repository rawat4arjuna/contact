import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import EditContact from "../components/editConatct";
import CenterGrid from "../components/centerGridLayout";
export default function Conatct(props) {
  return (
    <CenterGrid>
      <Grid container xs={12} sm={12} md={4}>
        <Grid item xs={12} md={12}>
          <Link to={"/fav"}>Show Favourite</Link>
          <Link to ="/">Go Home</Link>
          <h1> Contact DEMO APP</h1>
        </Grid>
        <EditContact />
      </Grid>
    </CenterGrid>
  );
}
