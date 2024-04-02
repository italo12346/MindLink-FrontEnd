import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Card = (props: any) => (
  <div className="card">
    <img src={props.image} alt="article" />
    <strong>{props.title}</strong>
    <div className="button-article">
      <Link to={props.url}>
        <input className="btn-readMore" type="button" value="Leia-mais" />
      </Link>
    </div>
  </div>
);
export default Card;
