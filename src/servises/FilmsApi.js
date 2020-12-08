
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = 'e6ef81afed74ab1ee71e8c331ba25208';
const imgUrl = 'https://image.tmdb.org/t/p/w400';

const fetchTrends = () => {
  return fetch(`${baseUrl}trending/movie/day?api_key=${apiKey}`)
    .then(res => res.json())
  .then(obj => obj.results)
}

const fetchSearch = (query) => {
  return fetch(`${baseUrl}search/movie?api_key=${apiKey}&language=en-US&page=1&query=${query}`)
  .then(res => res.json())
  .then(obj => obj.results)
}

const fetchMovie = (id) => {
  return fetch(`${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`)
  .then(res => res.json())
}

const getImage = (poster) => {
  return fetch(`${imgUrl}${poster}`)
}

const fetchCast = (id) => {
  return fetch(`${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=en-US`)
  .then(res => res.json())
}

const fetchReviews = (id) => {
  return fetch(`${baseUrl}movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
  .then(res => res.json())
}

const filmApi = { fetchTrends, fetchSearch, fetchMovie, getImage, fetchCast, fetchReviews };
export default  filmApi