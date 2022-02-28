import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navigation = ({ settext }) => {
  const [showInp, setshowInp] = useState(false);
  return (
    <div className="nav">
      <div className="nav-list">
        <Link to="/Movie">
          <img
            src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png"
            alt=""
          />
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/TvShows">
            <li>TvShows</li>
          </Link>

          <Link to="/Movie">
            <li>Movies</li>
          </Link>
        </ul>
      </div>
      <div className="nav-logo">
        {showInp ? (
          <input
            type="text"
            className="searsh-input"
            onChange={(e) => settext(e.target.value)}
          />
        ) : null}
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => setshowInp(!showInp)}
        >
          search
        </i>
        <img
          src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navigation;
