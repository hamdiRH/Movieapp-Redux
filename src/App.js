import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Search from "./components/Search";

const App =()=>{  return (
      <div className="App">
        <Search />
        <MovieList />
        <Add  />
      </div>
    );
  }


export default App;
