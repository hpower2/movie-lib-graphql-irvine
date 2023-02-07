import { Actor } from "../../../../models/Actor";

const createActorResolver = (context: any, { name }: { name: string }) => {
  return Actor.create({ name });
};

export default createActorResolver;
