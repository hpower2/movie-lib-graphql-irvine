import { Author } from "../../../../models/Author";

const updateAuthorResolver = async (
  context: any,
  { id, name }: { id: number; name: string }
) => {
  let myAuthor = await Author.findOne({ where: { id: id } });
  let authorName = myAuthor?.name;
  if (!myAuthor) {
    throw new Error(`Couldn't find Author with id ${id}`);
  }
  if (name !== undefined) {
    authorName = name;
  }

  return await myAuthor.update({ name: authorName }, { where: { id: id } });
};

export default updateAuthorResolver;
