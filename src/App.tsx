import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "./api/Characters";
import { useEffect, useState } from "react";
import { ApiResponse } from "./types";
import Carrousel from "./components/Carrousel";
import Loading from "./components/Loading";
function App() {
  const [characters, setCharacters] = useState<ApiResponse>();

  const { data } = useQuery({
    queryFn: getCharacters,
    queryKey: ["characters"],
  });

  useEffect(() => {
    setCharacters(data?.data);
  }, [data]);

  return (
    <div>
      {characters && characters?.items.length > 0 ? (
        <Carrousel characters={characters.items} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
