import { Actor } from "../../../../models/Actor";

const deleteActorResolver = (context: any, { id }: { id: number }) => {
  return Actor.destroy({where: {
    id: id
  }});
};

export default deleteActorResolver;
