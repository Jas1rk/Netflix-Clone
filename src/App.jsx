import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
