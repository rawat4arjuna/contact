import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schema";
import { FormError } from "./formError";
import StateHook from "../hooks/state";
import { UPDATE_CONTACT } from "../redux/actions/userActions";
const initState = {
  id: null,
  data: {},
};
const EditContact = () => {
  const [state, setState] = StateHook(initState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user_contact } = useSelector((state) => state);
  const { id, data } = state;
  const params = useParams();
  console.log(params, user_contact, "------");
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
  });
  React.useEffect(() => {
    if (params.id) {
      if (user_contact?.some((item) => item.id == params.id)) {
        console.log("[[[[[[[");
        let datam = user_contact?.filter((item) => item.id == params.id)[0];
        setState({ data: datam });
      } else {
        history.push("/");
      }
    }
  }, [params.id, user_contact]);

  React.useEffect(() => {
    if (data) {
      setValue("firstName", data.firstName);
      setValue("number", data.number);
      setValue("email", data.email);
    }
  }, [data]);
  const onSubmit = async (data) => {
    const newData = { ...data };
    newData["id"] = params.id;
    dispatch(UPDATE_CONTACT(newData));
    history.push("/");
  };
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
              Update Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default EditContact;
