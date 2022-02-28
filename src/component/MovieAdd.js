import React, { useState } from "react";

const MovieAdd = ({ handleAdd }) => {
  const [show, setshow] = useState(false);
  const [movie, setmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  return (
    <div className="add-movie">
      <button className="bbb" onClick={() => setshow(!show)}>
        <i className="fa-solid fa-circle-plus"></i>Add Movie
      </button>
      {show ? (
        <div className="modal-bg">
          <div className="modal-body">
            <i class="fa-solid fa-xmark" onClick={() => setshow(!show)}>
              CLOSE
            </i>
            <input
              type="text"
              placeholder="movie name"
              onChange={(e) => setmovie({ ...movie, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="movie image"
              onChange={(e) =>
                setmovie({ ...movie, posterurl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="movie description"
              onChange={(e) =>
                setmovie({ ...movie, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="movie rating"
              onChange={(e) => setmovie({ ...movie, rating: e.target.value })}
            />

            <button
              className="BUT"
              onClick={() => {
                handleAdd(movie);
                setshow(!show);
              }}
            >
              ADD MOVIES
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieAdd;
