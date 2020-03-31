import { ADD_STR } from "./ActionsType";
const addString = (payload: string) => {
  return { type: ADD_STR, payload: payload };
};
export default addString;