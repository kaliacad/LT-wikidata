import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("null");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://www.wikidata.org/w/api.php";
    const params = {
      action: "wbsearchentities",
      format: "json",
      search: input,
      language: "fr",
    };

    axios
      .get(url, { params })
      .then((response) => {
        const responseData = response.data;
        const finalData = responseData.search.map((entity) => ({
          label: entity.label,
          description: entity.description,
          url: entity.url,
          wd_id: entity.title,
        }));
        setData(finalData);
        console.log(finalData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Header setInput={setInput} />
      </div>
      {/* <Body /> */}
    </div>
  );
}

export default App;
