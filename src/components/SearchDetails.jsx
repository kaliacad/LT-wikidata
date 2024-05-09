import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SearchDetails({ value }) {
  const items = value.id;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://www.wikidata.org/w/api.php";
    const params = {
      origin: "*",
      action: "wbgetentities",
      ids: items,
      format: "json",
    };

    axios
      .get(url, { params })
      .then((response) => {
        if (response.data.entities[items].descriptions.fr) {
          const responseData = response.data.entities[items];
          console.log(responseData);
          setData(responseData);
          setIsPending(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsPending(false);
      });
  }, [items]);

  const url =
    data?.claims?.P18 && data?.claims?.P18[0]?.mainsnak?.datavalue?.value;
  const image = url && url.split(" ").join("_");

  return (
    data && (
      <div style={{ display: "flex" }} className="section-item">
        <div>
          {data?.claims?.P18 && (
            <img
              style={{ width: "100px" }}
              src={`https://commons.wikimedia.org/wiki/Special:FilePath/${image}`}
              alt=""
            />
          )}
        </div>
        <div className="item">
          <h3 className="item-title">{value.label}</h3>
          <p>{data.descriptions?.fr?.value}</p>
          <a href={value.concepturi}>Voir plus</a>
        </div>
      </div>
    )
  );
}
