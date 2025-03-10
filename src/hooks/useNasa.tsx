import { useEffect, useState } from "react";
import { nasaService } from "../service/nasaService";

export function useNasaAPOD() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await nasaService.getAPOD();
        setData(result);
      } catch (err) {
        setError("Erro ao buscar os dados da NASA.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
