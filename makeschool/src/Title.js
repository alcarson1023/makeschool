import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <br />
      <br />
      <div style={{backgroundColor: 'white', width: '500px', height: '20px'}}/>
      <div className="Title-Subtitle">
        San Francisco's Privately Owned Public Spaces
      </div>
    </div>
  );
}

export default Title;
