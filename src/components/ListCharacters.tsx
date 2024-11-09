import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/Characters";
import { useEffect, useState } from "react";
import { ApiResponseGetCharacter } from "../types";
import Carrousel from "./Carrousel";
import NewCarrousel from "./NewCarrousel";

const ListCharacters = () => {
  const [characters, setCharacters] = useState<ApiResponseGetCharacter>();

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
        <NewCarrousel characters={characters.items} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ListCharacters;
