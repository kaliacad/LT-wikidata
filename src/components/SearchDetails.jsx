import React from "react";

export default function SearchDetails({ value }) {
  return (
    <div className="item">
      <h3 className="item-title">{value.label}</h3>
      <p>{value.description}</p>
      <a href={value.concepturi}>Voir plus</a>
    </div>
  );
}
