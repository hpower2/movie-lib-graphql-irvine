import { Author } from "../../../../models/Author";

const createAuthorResolver = (context: any, { name }: { name: string }) => {
  console.log(name);
  return Author.create({ name });
};

export default createAuthorResolver;
