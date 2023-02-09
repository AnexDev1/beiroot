import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

import  Game from "./pages/Game";
import  MainMenu from "./pages/MainMenu";
import  HowToPlay from "./pages/HowToPlay";
import  LeaderBoard from "./pages/LeaderBoard";
import  NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const TRACKING_ID = "UA-205453516-2"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [
    window.location.pathname,
    window.location.search,
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
