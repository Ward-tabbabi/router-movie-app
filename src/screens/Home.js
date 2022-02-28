import React from "react";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  return (
    <div className="home-page">
      <img
        src="https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/fight_club_1999_02_0.jpg?itok=YYgMP4th"
        alt=""
      />
      <div className="start">
        <h1> BEST FILMS </h1>

        <p>
          Every time you buy a cinema ticket, genuine DVD or download, that
          money helps support more investment in film and television. Because
          you love movies, we get to make great films. This site was funded by
          the Industry Trust for Intellectual Property Awareness – showing our
          appreciation for you, the Irish public, every time you buy the real
          deal.
        </p>
        <div className="stars">
          {" "}
          <ReactStars
            value={5}
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

export default Home;
