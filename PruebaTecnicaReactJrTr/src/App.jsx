import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const API_KEY = "iOYLkan8PQdFu17fqzFdolAN2FBPhlg8";
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");

  const callGiphyAPI = (str) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${str}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setCatGif(data.data[0].images.original.url));
  };

  const callAPI = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
        callGiphyAPI(data.fact.split(" ", 3).join(" "));
      });
  };

  useEffect(callAPI, []);

  return (
    <div>
      <img src={catGif} alt="" width="200px" height="200px" />
      {catFact}
    </div>
  );
};

export default App;
