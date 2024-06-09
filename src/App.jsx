import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Poster from "./Components/Poster/Poster";
import {
  action,
  original,
  horrorMovies,
  ComedyMovies,
  RomanceMovies,
  Documentaries,
} from "./url";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Poster url={original} title="Netflix Originals" />
        <Poster url={action} title="Action" isSmall />
        <Poster url={horrorMovies} title="Horror" isSmall />
        <Poster url={ComedyMovies} title="Comedy Movies" isSmall />
        <Poster url={RomanceMovies} title="Romance" isSmall />
        <Poster url={Documentaries} title="Documentaries" isSmall />
      </div>
    </>
  );
}

export default App;
