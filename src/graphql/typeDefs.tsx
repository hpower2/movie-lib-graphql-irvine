
export const typeDefs = `
  type Actor {
    id: ID!
    name: String!
    movies: [Movie!]!
  }
  type Author {
    id: ID!
    name: String!
    movies: [Movie!]!
  }

  type Movie {
    id: ID!
    name: String!
    releaseDate: String!
    actors: [Actor!]!
    authors: Author!
  }

  type MovieActor {
    id: ID!
  }

  type Mutation {
    createAuthor(name: String!): Author!
    updateAuthor(id: Int!, name: String): Author!
    deleteAuthor(id: Int!): Author!

    createActor(name: String!): Actor!
    updateActor(id: Int!, name: String): Actor!
    deleteActor(id: Int!): Actor!

    createMovies(
      name: String!
      releaseDate: String!
      authorId: Int!
      actorId: [Int!]
    ): Movie!
    updateMovies(
      id: Int!
      name: String!
      releaseDate: String!
      authorId: Int
      actorId: [Int!]
    ): Movie!
    deleteMovies(id: Int!): Movie!
  }

  type Query {
    movies: [Movie!]!
    actors: [Actor!]!
    authors: [Author!]!
  }
`

