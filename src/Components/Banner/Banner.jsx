import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { Api_key, imageUrl } from "../../constants/constant";

const Banner = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${Api_key}&language=en-US`)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log(randomMovie);
        setMovies(randomMovie);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${
          movies ? imageUrl + movies.backdrop_path : ""
        })`,
      }}
      className="banner"
    >
      <div className="contant">
        <h1 className="title">{movies ? movies.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">{movies ? movies.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
