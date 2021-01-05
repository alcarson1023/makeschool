import React from "react";
import "./Title.css";
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">
        San Francisco's Privately Owned Public Open Spaces
      </div>
      <div>
          <NavLink activeClassName="nav-link-active" className="nav-link" exact to="/">List</NavLink>
          <NavLink activeClassName="nav-link-active" className="nav-link" to="/about">About</NavLink>
        </div>
    </div>
  );
}

export default Title;
