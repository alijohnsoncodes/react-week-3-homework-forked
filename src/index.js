import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />

      <p>
        This is a
        <a href="https://github.com/alijohnsoncodes/react-week-3-homework-forked.git">
          Open Source Code
        </a>
        created by Ali Johnson
      </p>
    </div>
  </StrictMode>
);
