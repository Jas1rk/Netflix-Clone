import { Api_key } from "./constants/constant";

const original = `discover/tv?api_key=${Api_key}&with_networks=213`;
const action = `discover/movie?api_key=${Api_key}&with_genres=28`;
const horrorMovies = `discover/movie?api_key=${Api_key}&with_genres=27`;

const ComedyMovies = `discover/movie?api_key=${Api_key}&with_genres=35`;
const RomanceMovies = `discover/movie?api_key=${Api_key}&with_genres=10749`;
const Documentaries = `discover/movie?api_key=${Api_key}&with_genres=99`;

export {
  original,
  action,
  horrorMovies,
  ComedyMovies,
  RomanceMovies,
  Documentaries,
};
