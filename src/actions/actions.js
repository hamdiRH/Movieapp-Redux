import {
  ADDMOVIE,
  DELETEMOVIE,
  EDITMOVIE,
  FILTERBYNAME,
  FILTERBYRATE
} from "./actionTypes";

export const addmovie = payload => {
  return {
    type: ADDMOVIE,
    payload
  };
};
export const deletemovie = payload => ({ type: DELETEMOVIE, payload });
export const editmovie = (payload,id) => ({ type: EDITMOVIE, payload ,id });
export const filterbyname = (payload) => ({ type: FILTERBYNAME, payload  });
export const filterbyrate = (payload) => ({ type: FILTERBYRATE, payload  });
