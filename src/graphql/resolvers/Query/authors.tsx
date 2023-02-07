import { Author } from "../../../models/Author";

const authorsResolver = () => {
  return Author.findAll();
};

export default authorsResolver;
