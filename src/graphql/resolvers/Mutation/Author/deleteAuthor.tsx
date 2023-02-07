import { Author } from "../../../../models/Author";

const deleteAuthorResolver = (context: any, { id }: { id: number }) => {
  return Author.destroy({
    where: {
      id: id,
    },
  });
};

export default deleteAuthorResolver;
