import { Actor } from "../../../../models/Actor";
import { Author } from "../../../../models/Author";
import { Movie } from "../../../../models/Movie";

function checkIfDuplicateExists(arr: [number]) {
  return new Set(arr).size !== arr.length;
}

const createMovieResolver = async (
  context: any,
  {
    name,
    releaseDate,
    authorId,
    actorId,
  }: { name: string; releaseDate: string; authorId: number; actorId: [number] }
) => {
  if (checkIfDuplicateExists(actorId)) {
    return undefined;
  }
  const movie1 = await Movie.create({ name, releaseDate, authorId });
  actorId.forEach((actor) => {
    movie1.addActors(actor);
  });
  const newMovie = Movie.findByPk(movie1.id);
  return newMovie;
};

export default createMovieResolver;
