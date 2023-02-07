import { Actor } from "../../models/Actor";
import { Movie } from "../../models/Movie";

const resolvers = {
  movies: async (actors: Actor) => {
    const movie = Movie.findAll({
      include: [
        {
          model: Actor,
          where: { id: actors.id },
        },
      ],
      order: [["name", "ASC"]],
    });
    if (await movie){
      return movie
    }
    return []
  },
};

export default resolvers;
