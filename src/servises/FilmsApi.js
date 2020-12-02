const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = 'e6ef81afed74ab1ee71e8c331ba25208';
const apiKeyNew = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmVmODFhZmVkNzRhYjFlZTcxZThjMzMxYmEyNTIwOCIsInN1YiI6IjVmYzYzODY3ZmJhNjI1MDA0NWExNjIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7-0cT6mPlgjf9jheoA3Lk3SPT8TgyomFWdzAefDlA"

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

const getImage = (id, poster) => {
  return fetch(`${baseUrl}movie/${id}/images?api_key=${apiKey}`)
  .then(res => res.json())
}

export default {fetchTrends, fetchSearch, fetchMovie, getImage};