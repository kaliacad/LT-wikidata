import React from "react";

export default function SearchDetails({ value }) {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl">{value.label}</h3>
        <h3 className="text-xl">
          <a href={value.concepturi}>{value.id}</a>
        </h3>
      </div>
      <div>
        <p>{value.description}</p>
      </div>
    </div>
  );
}
