import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/footer";

function App() {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState(true);
  console.log(state);

  useEffect(() => {
    const url = "https://www.wikidata.org/w/api.php";
    const params = {
      origin: "*",
      action: "wbsearchentities",
      format: "json",
      search: input,
      language: "en",
      limit: "max",
    };

    axios
      .get(url, { params })
      .then((response) => {
        if (response.data.search) {
          const responseData = response.data;
          setData(responseData);
          setIsPending(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsPending(false);
      });
  }, [input]);

  return state ? (
    <div className="container">
      <div className="haeder">
        <Header setInput={setInput} state={() => setState()} />
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <Header setInput={setInput} />
      {error && <div>Error: {error.message}</div>}
      {data && <Body data={data} />}
    </div>
  );
}

export default App;
