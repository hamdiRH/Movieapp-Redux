import { combineReducers } from "redux";
import {
  getMovieListsuccess,
  getMovieListRequest,
  getMovieListfail,
} from "./constants";

const initialState = {
  loading: false,
  movies: [],
  filterbyname: "",
  filterbyrate: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getMovieListRequest:
      return { ...state, loading: true };
    case getMovieListsuccess:
      return { ...state, loading: false, movies: action.payload };

    case getMovieListfail:
      return { ...state, loading: false };

    default:
      return state;
  }
};


