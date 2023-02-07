import { Movie } from "./models/Movie";
import { Actor } from "./models/Actor";
import { Author } from "./models/Author";

export const addModel = async () => {
  const actor1 = await Actor.create({ name: "Tom Hanks" });
  const actor2 = await Actor.create({ name: "Julia Roberts" });
  const actor3 = await Actor.create({ name: "Irvine" });
  const actor4 = await Actor.create({ name: "Julia Samal" });
  const actor5 = await Actor.create({ name: "Jamuli" });
  const actor6 = await Actor.create({ name: "Tabral" });
  const actor7 = await Actor.create({ name: "Rifat" });
  const actor8 = await Actor.create({ name: "Tandig" });

  // Create dummy data for authors
  const author1 = await Author.create({ name: "J.K. Rowling" });
  const author2 = await Author.create({ name: "Stephen King" });
  const author3 = await Author.create({ name: "Irvine" });
  const author4 = await Author.create({ name: "Julia Samal" });
  const author5 = await Author.create({ name: "Jamuli" });
  const author6 = await Author.create({ name: "Tabral" });
  const author7 = await Author.create({ name: "Rifat" });
  const author8 = await Author.create({ name: "Tandig" });

  // Create dummy data for movies
  const movie1 = await Movie.create({
    name: "Forrest Gump",
    releaseDate: "1994-07-06",
    authorId: author1.id,
  });
  const movie2 = await Movie.create({
    name: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    authorId: author2.id,
  });
  const movie3 = await Movie.create({
    name: "Forrest Gump 2",
    releaseDate: "2114-07-06",
    authorId: author4.id,
  });
  const movie4 = await Movie.create({
    name: "The Shawshank Redemption 2",
    releaseDate: "2311-09-23",
    authorId: author5.id,
  });

  movie1.addActors(actor1);
  movie1.addActors(actor2);
  movie2.addActors(actor2);
  movie3.addActors(actor2);
  movie4.addActors(actor4);
  movie2.addActors(actor5);
  movie1.addActors(actor3);
  movie1.addActors(actor5);
  movie2.addActors(actor7);
  movie3.addActors(actor7);
  movie4.addActors(actor6);
  movie2.addActors(actor3);
};
