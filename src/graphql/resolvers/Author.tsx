import { Author } from "../../models/Author";
import { Movie } from "../../models/Movie";

const resolvers = {
  movies: async (authors: Author) => {
    const movie = Movie.findAll({
      include: [
        {
          model: Author,
          where: { id: authors.id },
          as: "author",
        },
      ],
      order: [["name", "ASC"]],
    });
    if (await movie) {
      return movie;
    }
    return [];
  },
};

export default resolvers;
