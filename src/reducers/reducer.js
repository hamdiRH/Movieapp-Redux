import { movies } from "../data";
import {
  ADDMOVIE,
  DELETEMOVIE,
  EDITMOVIE,
  FILTERBYNAME,
  FILTERBYRATE
} from "../actions/actionTypes";
const initialState = {
  movies,
  filterbyname: "",
  filterbyrate: 0
};
export const reducer = (state = initialState, action) => {
  const { type, payload, id } = action;
  switch (type) {
    case ADDMOVIE:
      return { ...state, movies: [...state.movies, payload] };
    case DELETEMOVIE:
      return { ...state, movies: state.movies.filter(el => el.id !== payload) };
    case EDITMOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === id ? { ...el, ...payload } : el
        )
      };
    case FILTERBYNAME:
      return { ...state, filterbyname: payload };
    case FILTERBYRATE:
      return { ...state, filterbyrate: payload };
    default:
      return state;
  }
};
