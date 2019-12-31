import React from "react";
import {connect} from 'react-redux'
import Card from "./Card";

const MovieList = props => {
  const {movies,
    filterbyname,
    filterbyrate} = props
  return (
    <div style={{ display: "flex" }}>
      {movies
        .filter(
          e =>
            e.title.toLowerCase().includes(filterbyname.toLowerCase()) &&
            e.rate >= filterbyrate
        )
        .map(e => (
          <Card element={e} />
        ))}
    </div>
  );
};
const mstp = state =>{
  return {...state}
}
export default connect(mstp)(MovieList);
