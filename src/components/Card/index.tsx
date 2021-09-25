import React from "react";
import PeopleData from "../../types/People";
import "./index.scss";

const Card: React.FC<PeopleData> = (props: PeopleData) => {

  return (
  <div className="flex-grid-item">
    <div className="card">
      <h2 className="card__name">{props.name}</h2>
      <p className="card__location">{props.locationName}</p>
      <div
        className="card__picture"
        style={{ backgroundImage: "url(" + props.picture + ")" }}
      ></div>
      <div className="card__bio">
        <span>{props.professionalHeadline}</span>
      </div>
      <a
        href={`https://torre.co/${props.username}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="card__button"></button>
        <i className="card__arrow fas fa-arrow-right"></i>
      </a>
    </div>
  </div>);

}

export default Card;
