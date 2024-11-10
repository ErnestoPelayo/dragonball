import api from "../lib/api";

export const getPlanets = async () => {
  const response = await api.get("https://dragonball-api.com/api/planets");
  return response;
};
