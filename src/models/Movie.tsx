import { Sequelize, Model, DataTypes, BelongsToMany } from "sequelize";
import { sequelize } from "./db";

export class Movie extends Model {
  [x: string]: any;
  public id!: number;
  public name!: string;
  public releaseDate!: string;

  public static associations: {
    actors: BelongsToMany;
    author: BelongsToMany;
  };
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Movie",
    tableName: "movies",
  }
);