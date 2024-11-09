import api from "../lib/api"

export const getCharacters = async () => {
    const response = await api.get("/characters")
    return response
}