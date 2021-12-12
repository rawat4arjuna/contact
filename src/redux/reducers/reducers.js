import {
  RESET,
  SET_DATA,
  ADD_NEW_CONTACT,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  DELETE_NUMBER,
  UPDATE_DATA,
} from "./types";
const initialState = {
  favourites: [],
  user_contact: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      let newState = state.user_contact
        ? state.user_contact.push(action.payload)
        : { user_contact: [action.payload] };
      return {
        ...state,
        ...newState,
      };
    case ADD_FAVORITE:
      let newfavourites = state.favourites
        ? state.favourites.push(action.payload)
        : { favourites: [action.payload] };
      return {
        ...state,
        ...newfavourites,
      };
    case DELETE_FAVORITE:
      let deleted = state.favourites.filter(
        (f) =>
          f.number != action.payload.number && f.email != action.payload.email
      );
      return {
        ...state,
        ...{
          favourites: deleted,
        },
      };
    case DELETE_NUMBER:
      let deleteContact = state.user_contact.filter(
        (f) => f.id != action.payload.id
      );
      let delFav = state.favourites.filter((f) => f.id != action.payload.id);
      return {
        ...state,
        ...{
          user_contact: deleteContact,
          favourites: delFav,
        },
      };
    case UPDATE_DATA:
      let tdeleteContact = state.user_contact.filter(
        (f) => f.id != action.payload.id
      );
      let tdelFav = [];
      if (
        state.favourites &&
        state.favourites.some((f) => f.id == action.payload.id)
      ) {
        tdelFav = state.favourites.filter((f) => f.id != action.payload.id);
        tdelFav.push(action.payload);
      }
      tdeleteContact.push(action.payload);
      return {
        ...state,
        ...{
          user_contact: tdeleteContact,
          favourites: tdelFav,
        },
      };
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
export default reducer;
