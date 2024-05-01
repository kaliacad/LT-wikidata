import React from "react";
import SearchDetails from "./SearchDetails";

export default function Body({ data }) {
  console.log(data);
  return (
    <div>
      <h3 className="research-title">{`${data["search-continue"]} résultats pour la recherche de "${data.searchinfo.search}"`}</h3>
      {data.search.map((search, i) => (
        <SearchDetails key={i} value={search} />
      ))}
    </div>
  );
}
