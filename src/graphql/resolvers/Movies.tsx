import { Actor } from "../../models/Actor";
import { Author } from "../../models/Author";
import { Movie } from "../../models/Movie";

const resolvers = {
  actors: (movies: Movie) => {
    return Actor.findAll({
      include: [
        {
          model: Movie,
          where: { id: movies.id },
        },
      ],
      order: [["name", "ASC"]],
    });
  },
  authors: (movies: Movie) => {
    return Author.findByPk(movies.authorId);
  },

};

export default resolvers;
