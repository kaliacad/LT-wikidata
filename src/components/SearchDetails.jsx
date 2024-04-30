import React from "react";

export default function SearchDetails({ value }) {
  return (
    <div>
      <div>
        <h3>{value.label}</h3>
        <h3>
          <a href={value.concepturi}>{value.id}</a>
        </h3>
      </div>
    </div>
  );
}
