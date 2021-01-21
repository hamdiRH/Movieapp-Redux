import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "./redux/actions";
function App() {
  // const [movieList, setmovieList] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);
  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e.target.value;

    if (searchTerm && searchTerm !== "")
      dispatch(getMovieList(SEARCH_API + searchTerm));
  };
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  return (
    <>
      <header>
        <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            onChange={handleSearch}
          />
        </form>
      </header>

      <main id="main">
        {movieList.map((movie) => {
          const { title, poster_path, vote_average, overview, id } = movie;
          return (
            <div className="movie" key={id}>
              <img src={IMG_PATH + poster_path} alt={title} />
              <div className="movie-info">
                <h3>${title}</h3>
                <span className={getClassByRate(vote_average)}>
                  ${vote_average}
                </span>
              </div>
              <div className="overview">
                <h3>Overview</h3>${overview}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
