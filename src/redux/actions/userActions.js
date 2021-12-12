import axios from "axios";
import { toast } from "react-toastify";
import { CONFIG } from "../../config";
import {
  ADD_NEW_CONTACT,
  RESET,
  SET_DATA,
  UPDATE_DATA,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  DELETE_NUMBER,
} from "../reducers/types";
export const ADD_CONTACT = (data) => async (dispatch) => {
  try {
    toast.success("Conatct Added Successfully");
    dispatch({
      type: ADD_NEW_CONTACT,
      payload: data,
    });
  } catch (e) {
    console.log(e.message);
    toast.error("Something went wrong please try again");
  }
};

export const ADD_FAVORITES = (data) => async (dispatch) => {
  try {
    toast.success("Favourite Added Successfully");
    dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  } catch (e) {
    console.log(e.message);
    toast.error("Something went wrong please try again");
  }
};

export const DELETE_FAVORITES = (data) => async (dispatch) => {
  try {
    toast.success("Remove Favourite  Successfully");
    dispatch({
      type: DELETE_FAVORITE,
      payload: data,
    });
  } catch (e) {
    console.log(e.message);
    toast.error("Something went wrong please try again");
  }
};

export const DELETE_CONTACT =(data) => async (dispatch)=>{
  try {
    toast.success("Remove Contact  Successfully");
    dispatch({
      type: DELETE_NUMBER,
      payload: data,
    });
  } catch (e) {
    console.log(e.message);
    toast.error("Something went wrong please try again");
  }
}

export const UPDATE_CONTACT =(data) => async (dispatch)=>{
  try {
    toast.success("Update Contact  Successfully");
    dispatch({
      type: UPDATE_DATA,
      payload: data,
    });
    return true
  } catch (e) {
    console.log(e.message);
    toast.error("Something went wrong please try again");
  }
}