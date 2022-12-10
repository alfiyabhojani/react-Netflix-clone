import React from "react";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div>
      <h1>Hii alfiya bhojani</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
