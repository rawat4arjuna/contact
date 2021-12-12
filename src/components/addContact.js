import React from "react";
import { Button, Grid, TextField } from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schema";
import { FormError } from "./formError";
import StateHook from "../hooks/state";
import { ADD_CONTACT } from "../redux/actions/userActions";
const initState = {
  isEdit: false,
};
const AddContact = () => {
  const [state, setState] = StateHook(initState);
  const dispatch = useDispatch();
  const { user_contact } = useSelector((state) => state);
  const { isEdit } = state;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
  });
  const getId = () => {
    if (user_contact?.length > 0) {
      let num = user_contact[user_contact.length - 1].id + 1;
      return num;
    }
    return 1;
  };
  const onSubmit = (data) => {
    const newData = { ...data };
    newData["id"] = getId();
    dispatch(ADD_CONTACT(newData));
    setState({ isEdit: false });
    reset({
      firstName: "",
      number: "",
      email: "",
    });
  };
  if (!isEdit) {
    return (
      <Grid container xs={12} sm={12} md={12}>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              onClick={() => setState({ isEdit: true })}
            >
              Add New Contact!
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <Controller
            name={"firstName"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type={"text"}
                onChange={onChange}
                value={value}
                label={"Enter First Name"}
                fullwidth
                style={{ minWidth: "250px" }}
              />
            )}
          />
        </Grid>
        <FormError value={errors?.firstName?.message} />
        <br />
        <Grid item xs={12}>
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type={"text"}
                onChange={onChange}
                value={value}
                label={"Enter Email"}
                fullwidth
                style={{ minWidth: "250px" }}
              />
            )}
          />
        </Grid>
        <FormError value={errors?.email?.message} /> <br />
        <Grid item xs={12}>
          <Controller
            name={"number"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type={"text"}
                onChange={onChange}
                value={value}
                label={"Enter Phone number"}
                fullwidth
                style={{ minWidth: "250px" }}
              />
            )}
          />
        </Grid>
        <FormError value={errors?.number?.message} />
        <br />
        <Grid container>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setState({ isEdit: false })}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default AddContact;
