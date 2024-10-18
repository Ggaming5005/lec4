import React from "react";
import "../styles/Card.css";

function Card({ name, desc, src, bg }) {
  return (
    <div className="card" style={{ backgroundColor: bg }}>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
