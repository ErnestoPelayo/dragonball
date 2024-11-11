import api from "../lib/api";

export const getCharacters = async () => {
  const response = await api.get("/characters?limit=100");
  return response;
};

export const getCharacterById = async (id: number) => {
  const response = await api.get(`/characters/${id}`);
  return response;
};
