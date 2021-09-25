import React from "react";
import PeopleData from "../../types/People";

const Card: React.FC<PeopleData> = (props: PeopleData) => {

  return (
  <div className="flex-grid-item">
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.locationName}</p>
      <div
        className="pic"
        style={{ backgroundImage: "url(" + props.picture + ")" }}
      ></div>
      <div className="bio">
        <span>{props.professionalHeadline}</span>
      </div>
      <a
        href={`https://torre.co/${props.username}`}
        target="_blank"
        rel="noreferrer"
      >
        <button></button>
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>);

}

export default Card;
