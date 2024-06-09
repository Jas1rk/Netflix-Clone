import React, { useEffect, useState } from "react";
import "./Poster.css";
import axios from "../../axios";
import { imageUrl, Api_key } from "../../constants/constant";
import YouTube from "react-youtube";

const Poster = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log("Error in fetching", error);
      });
  }, []);

  const handleTarailer = (videId) => {
    axios
      .get(`/movie/${videId}/videos?api_key=${Api_key}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setTrailer(response.data.results[0]);
        } else {
          console.log("This video is not available");
        }
      })
      .catch((error) => console.log("Error in fetching", error));
  };

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="poster">
        {movies.map((movie, index) => {
          return (
            <img
              onClick={() => handleTarailer(movie.id)}
              className={props.isSmall ? "smallPoster" : "posterImage"}
              key={index}
              src={`${imageUrl + movie.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>
      {trailer && <YouTube videoId={trailer.key} opts={options} />}
    </div>
  );
};

export default Poster;
