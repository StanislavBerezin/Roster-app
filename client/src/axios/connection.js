import axios from "axios";
// 6ed12e064b90ae1290fa326ce9e790ff API
// user: JumboFED pass: jumbofrontendcodeproject
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default axiosInstance;
//popular: https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&page=1
//query search: https://api.themoviedb.org/3/search/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&query=Iron%20man&page=1&include_adult=false
//specific movie: https://api.themoviedb.org/3/movie/335983?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US
