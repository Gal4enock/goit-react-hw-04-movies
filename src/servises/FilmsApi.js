const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = 'e6ef81afed74ab1ee71e8c331ba25208';

const fetchTrends = () => {
  return fetch(`${baseUrl}trending/movie/day?api_key=${apiKey}`)
    .then(res => res.json())
  .then(obj => obj.results)
}

export default fetchTrends;