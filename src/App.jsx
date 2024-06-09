import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Poster from "./Components/Poster/Poster";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Poster />
       
      </div>
    </>
  );
}

export default App;
