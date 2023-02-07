import { ApolloServer } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as cors from "cors";

//Graph QL
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

// DB
import { sequelize } from "./models/db";

//Models
import { Movie } from "./models/Movie";
import { Actor } from "./models/Actor";
import { Author } from "./models/Author";
// import { MovieActor } from "./models/MovieActor";

dotenv.config();

const apolloServer = new ApolloServer({ resolvers, typeDefs });

const startServer = async (apolloServer: any) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
};

const app = express();

Movie.belongsToMany(Actor, {
  through: "MovieActor",
});
Actor.belongsToMany(Movie, {
  through: "MovieActor",
});
Movie.belongsTo(Author, { as: "author" });
Author.hasMany(Movie, { foreignKey: "authorId", as: "movies" });

sequelize.sync({ force: true }).then(() => {
  console.log("Tables created successfully");
});

app.get("/", async (req, res) => {
  // Create dummy data for actors
  await Actor.sync();
  await Movie.sync();
  await Author.sync();
  //   await MovieActor.sync();
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

  movie1.addActors(actor1);
  movie1.addActors(actor2);
  movie2.addActors(actor2);
  res.send("Dummy data has been inserted!");
});
// Use the models in your Express routes, e.g.:
app.get("/movies", async (req, res) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Actor,
        as: "actors",
      },
      {
        model: Author,
        as: "author",
      },
    ],
  });

  res.send(movies);
});
app.get("/authors", async (req, res) => {
  const authors = await Author.findAll({
    include: [
      {
        model: Movie,
        as: "movies",
      },
    ],
  });

  res.send(authors);
});
app.get("/actors", async (req, res) => {
  const actors = await Actor.findAll({
    include: [
      {
        model: Movie,
        as: "movies",
      },
    ],
  });

  res.send(actors);
});

startServer(apolloServer);

// ...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
