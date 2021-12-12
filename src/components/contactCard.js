import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PaperCustom } from "./styleCustoms";
import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  DELETE_CONTACT,
} from "../redux/actions/userActions";

const ContactCard = ({ item, key }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state);
  const AddFavorite = () => {
    dispatch(ADD_FAVORITES(item));
  };
  const DeleteFavorite = () => {
    dispatch(DELETE_FAVORITES(item));
  };
  const deleteContact = () => {
    dispatch(DELETE_CONTACT(item));
  };
  return (
    <Grid item xs={12} sm={12} md={12} key={key}>
      <PaperCustom>
        <form>
          <Grid item xs={12}>
            <Typography variant="heading" component="h5">
              Full Name :
            </Typography>
            <Typography variant="body">{`${item?.firstName}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="heading" component="h5">
              Email :
            </Typography>
            <Typography variant="body">{item?.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="heading" component="h5">
              Phone :
            </Typography>
            <Typography variant="body">{item?.number}</Typography>
          </Grid>
          <Grid item xs={12}>
            {favourites?.some(
              (i) => i.number == item.number && i.email == item.email
            ) ? (
              <>
                <Typography variant="body">Conatct is user favorite</Typography>
                <Button onClick={DeleteFavorite}>Remove From favourite</Button>
              </>
            ) : (
              <Button variant="" onClick={AddFavorite}>
                Add favourite
              </Button>
            )}{" "}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={deleteContact}
            >
              Delete
            </Button>
            <Link to={`/contact/${item.id}`}>Edit Conatct</Link>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default ContactCard;
