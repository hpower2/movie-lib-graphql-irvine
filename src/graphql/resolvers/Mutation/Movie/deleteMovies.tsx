import { Movie } from "../../../../models/Movie";

const deleteMovieResolver = (context: any, { id }: { id: number }) => {
  return Movie.destroy({
    where: {
      id: id,
    },
  });
};

export default deleteMovieResolver;
