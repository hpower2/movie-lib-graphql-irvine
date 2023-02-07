import { Actor } from "../../../../models/Actor";

const updateActorResolver = async (
  context: any,
  { id, name }: { id: number; name: string }
) => {
  let myActor = await Actor.findOne({ where: { id: id } });
  let myName = myActor?.name
  if (!myActor) {
    throw new Error(`Couldn't find actor with id ${id}`);
  }
  if (name !== undefined) {
    myName = name;
  }

  return await myActor.update({ name: myName }, { where: { id: id } });
};

export default updateActorResolver;
