import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//Graph QL
import resolvers from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

// DB
import { sequelize } from "./models/db";

//Models
import { Movie } from "./models/Movie";
import { Actor } from "./models/Actor";
import { Author } from "./models/Author";
import { graphqlHTTP } from "express-graphql";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { addModel } from "./dummyModels";

dotenv.config();

const app = express();

Movie.belongsToMany(Actor, {
  through: "MovieActor",
});
Actor.belongsToMany(Movie, {
  through: "MovieActor",
});
Movie.belongsTo(Author, { as: "author" });
Author.hasMany(Movie, { foreignKey: "authorId", as: "movies" });


sequelize.sync().then(() => {
  console.log("Tables created successfully");
});

app.get("/createdummy", async (req, res) => {
  // Create dummy data for actors
  await addModel()
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

var schema = loadSchemaSync(typeDefs, {
  loaders: [new GraphQLFileLoader()],
});

var newSchema = addResolversToSchema({ schema, resolvers });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: newSchema,
    graphiql: true,
  })
);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
