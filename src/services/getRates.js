import { api } from "../api";

export const getRates = async (crr) => {
  let url = `${crr}`;
  return api.get(url);
};
