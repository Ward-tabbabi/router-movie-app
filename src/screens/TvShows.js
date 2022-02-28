import React from "react";

const TvShows = () => {
  return (
    <div className="tvshows">
      <img
        src="https://miro.medium.com/max/1400/1*KzsK7da17Y8nalSNAEuquA.jpeg"
        alt=""
      />
      <div className="tv">
        <h1>TV Shows</h1>

        <p>
          Originally inspired by the style of early Disney cartoons, anime
          (pronounced ah-nee-may) is one of the most popular animation styles in
          the world. Due to the Disney influence, anime usually features large
          eyes, small mouths, and often simple physical characteristics on its
          characters. One sub-genre, known as super-deformed anime, features
          large heads on small bodies and was the inspiration for bobblehead
          figures.
        </p>

        <ul>
          <li>The Sopranos (1999-2007) ...</li>
          <li>Game of Thrones (2011-2019) ...</li>
          <li>Ozark (4 Seasons) ...</li>
          <li>Breaking Bad (2009-2013) ...</li>
          <li>House of Cards (2013-2018) ...</li>
          <li>Better Call Saul. ...</li>
          <li>Money Heist. ...</li>
          <li>The Boys.</li>
        </ul>
      </div>
    </div>
  );
};

export default TvShows;
