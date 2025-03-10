import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const nasaService = {
    async getAPOD() {
      try {
        const response = await axios.get(BASE_URL, {
          params: { api_key: API_KEY },
        });
        return response.data;
      } catch (error) {
        console.error("Erro ao buscar a imagem do dia:", error);
        throw error;
      }
    },
  };