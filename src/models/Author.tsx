import { Sequelize, Model, DataTypes, BelongsToMany } from "sequelize";
import { sequelize } from "./db";

export class Author extends Model {
  public id!: number;
  public name!: string;

  public static associations: {
    movies: BelongsToMany;
  };
}

Author.init(
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
  },
  {
    sequelize,
    modelName: "Author",
    tableName: "authors",
  }
);
