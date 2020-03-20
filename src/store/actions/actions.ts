import { ADD_STR } from "./actionsType";
const addString = (payload: string) => {
  return { type: ADD_STR, payload: payload };
};
export default addString;