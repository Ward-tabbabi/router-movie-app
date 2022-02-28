import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
const MovieDet = ({ movies }) => {
  const params = useParams();

  const movie = movies.find((el) => el.id == params.id);

  return (
    <div>
      <div className="Movie-details">
        <img src={movie.posterurl} alt="" />
        <div className="details">
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
          <ReactStars
            value={movie.rating}
            edit={false}
            count={5}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDet;
