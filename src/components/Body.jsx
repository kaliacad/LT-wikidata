import React from "react";

export default function Body({ data }) {
  console.log(data);
  return (
    <div>
      <h3>{`${data["search-continue"]} résultats pour la recherche de "${data.searchinfo.search}"`}</h3>
    </div>
  );
}
