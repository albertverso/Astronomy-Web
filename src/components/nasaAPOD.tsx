import { useNasaAPOD } from "../hooks/useNasa";

export function NasaAPOD() {
  const { data, loading, error } = useNasaAPOD();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.date}</p>
      <img
        src={data.url}
        alt={data.title}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-md mt-4"
      />
      <p className="mt-4">{data.explanation}</p>
    </div>
  );
}