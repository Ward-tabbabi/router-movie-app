import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/Movie/${movie.id}`}>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={movie.posterurl} />
              <h1>{movie.name}</h1>
              <h4>2017, David Ayer</h4>
              <span className="minutes">117 min</span>
              <p className="type">Action, Crime, Fantasy</p>
            </div>
            <div className="movie_desc">
              <p className="text">{movie.description}</p>
            </div>
            <div className="rate">
              <ReactStars
                value={movie.rating}
                edit={false}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{
              background: `url(${movie.posterurl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="movie_social">
              <ul>
                <li>
                  <i className="material-icons">share</i>
                </li>
                <li>
                  <i className="material-icons"></i>
                </li>
                <li>
                  <i className="material-icons">chat_bubble</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
