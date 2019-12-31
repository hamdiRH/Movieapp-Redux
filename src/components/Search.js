import React from "react";
import Rate from "./Rate";
import { connect } from 'react-redux'
import {filterbyname,filterbyrate} from "../actions/actions"

const Search =({filterbyname,rate,filterbyrate})=>  {


    return (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={e => {filterbyname(e.target.value) }}
        />
        <Rate rate={rate} starIndex={filterbyrate}/>
      </div>
    );
  }


// const mdtp = dispatch =>{
//   return {
//     filterbyname : payload =>dispatch(filterbyname(payload))
//   }
// }
const MapStateToProps = state => ({rate:state.filterbyrate})
export default  connect(MapStateToProps,{filterbyname,filterbyrate})(Search)