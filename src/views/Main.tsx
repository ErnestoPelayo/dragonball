import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/Characters";
import { Link } from "react-router-dom";
import { Character } from "../types";

const Main = () => {
  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  return (
    <div className="w-5/6 mx-auto">
      <p className="font-black text-yellow-500 text-5xl lg:text-7xl xl:text-6xl p-2 mb-2">
        All Fighters of Dragon Ball
      </p>
      <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg">
        <Link to={`/`}>Volver</Link>
      </button>
      <div className="flex flex-wrap justify-center gap-2">
        {data?.data.items.map((character: Character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <div className="relative z-50 w-64 h-72 bg-black bg-opacity-50 p-5 hover:cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-2xl font-bold text-yellow-500">
                  {character.name}
                </p>
              </div>
              <img
                className="object-cover w-full h-full object-top hover:scale-105 transition-transform duration-300"
                src={character.image}
                alt={character.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
