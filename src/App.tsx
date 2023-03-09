import React from "react";
import SearchWeather from "./components/SearchWeather";
import "./App.css";
import ContetWeather from "./components/ContetWeather";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <SearchWeather />
          <div className="content_title">
            <ContetWeather/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
