import React from "react";
import Rate from "./Rate";
import { connect } from 'react-redux'
import Add from './Add'
import {deletemovie} from '../actions/actions'

const Card = ({ element,deletemovie }) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem;" }}>
        <img src={element.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{element.title}</h5>
          <p class="card-text">{element.year}</p>
          <Rate starIndex={() => {}} rate={element.rate} />
          <button onClick={()=>deletemovie(element.id)}>X</button>
          <Add movie={element}/>
        </div>
      </div>
    </div>
  );
};
export default connect(null,{deletemovie})(Card);
