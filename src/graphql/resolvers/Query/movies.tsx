import { Movie } from "../../../models/Movie";


const moviesResolver = () => {
  return Movie.findAll();
};

export default moviesResolver;
