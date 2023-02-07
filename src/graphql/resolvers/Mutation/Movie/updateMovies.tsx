import { Movie } from "../../../../models/Movie";

const updateMovieResolver = async (
  context: any,
  {
    id,
    name,
    releaseDate,
    authorId,
    actorId,
  }: {
    id: number;
    name: string;
    releaseDate: string;
    authorId: number;
    actorId: [number];
  }
) => {
  const myMovie = await Movie.findOne({ where: { id: id } });
  let movieName = myMovie?.name;
  let movieReleaseDate = myMovie?.releaseDate;
  let movieAuthorId = myMovie?.authorId;
  let movieActorId = myMovie?.actors;
  if (!myMovie) {
    throw new Error(`Couldn't find Movie with id ${id}`);
  }
  if (name !== undefined) {
    movieName = name;
  }
  if (releaseDate !== undefined) {
    movieReleaseDate = releaseDate;
  }
  if (authorId !== undefined) {
    movieAuthorId = authorId;
  }
  myMovie.update(
    { name: movieName, releaseDate: movieReleaseDate, authorId: movieAuthorId },
    { where: { id: id } }
  );

  if (actorId !== undefined) {
    await myMovie.setActors([]);
    movieActorId = actorId;
    movieActorId.forEach(async (actor: any) => {
      await myMovie.addActors(actor);
    });
  }

  const newMovie = Movie.findByPk(myMovie.id);
  return newMovie;
};

export default updateMovieResolver;
