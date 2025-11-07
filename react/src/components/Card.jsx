import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div id="Card">
      <img
        src="https://howtoanime.com//admin/images/Content-4/57579.jpg"
        alt=""
        height={200}
      />
      <h1>{props.name}</h1>
      <h1>{props.edu}</h1>
    </div>
  );
}

export default Card;
