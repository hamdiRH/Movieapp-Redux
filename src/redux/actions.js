import {
  getMovieListfail,
  getMovieListRequest,
  getMovieListsuccess,
} from "./constants";
import axios from "axios";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

export const getMovieList = (url) => async (dispatch) => {
  try {
    dispatch({
      type: getMovieListRequest,
    });
    const res = await axios.get(url || API_URL);
    return dispatch({
      type: getMovieListsuccess,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: getMovieListfail,
      payload: error,
    });
  }
};

