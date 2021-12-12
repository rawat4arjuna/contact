import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Contact from "../components/contactCard";
import AddContact from "../components/addContact";
import CenterGrid from "../components/centerGridLayout";
export default function Home(props) {
  const { user_contact } = useSelector((state) => state);
  console.log("--------------------", user_contact);
  return (
    <CenterGrid>
      <Grid container xs={12} sm={12} md={4}>
        <Grid item xs={12} md={12}>
          <Link to={"/fav"}>Show Favourite</Link>
          <h1> Contact DEMO APP</h1>
        </Grid>
        <AddContact />
        {user_contact?.map((item, i) => (
          <Contact item={item} key={i} />
        ))}
        {(user_contact?.length === 0 || !user_contact) && (
          <Typography variant="body" component="p">
            No Contact Found Please Add one
          </Typography>
        )}
      </Grid>
    </CenterGrid>
  );
}
