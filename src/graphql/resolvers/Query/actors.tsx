import { Actor } from "../../../models/Actor";

const actorsResolver = () => {
  return Actor.findAll();
};

export default actorsResolver;
