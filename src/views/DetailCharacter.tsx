import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../api/Characters";

const DetailCharacter = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(Number(id)),
  });

  if (isLoading)
    return (
      <p className="font-black text-yellow-500 text-5xl lg:text-7xl xl:text-9xl p-2 mb-2">
        {isLoading ? "Loading..." : "Character Detail"}
      </p>
    );

  return (
    <div className="w-5/6 mx-auto">
      <p className="font-black text-yellow-500 text-5xl lg:text-7xl xl:text-9xl p-2 mb-2">
        {isLoading ? "Loading..." : "Fighter "}
      </p>
      <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg">
        <Link to={`/`}>Volver</Link>
      </button>
      {data && data.data && !isLoading && (
        <div className="w-5/6 mx-auto">
          <p className="text-white text-9xl text-center font-black bg-gray-700 bg-opacity-75 mb-2">
            About
          </p>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="w-1/3 h-full flex justify-center items-center ">
              <div className="flex items-center justify-center">
                <img
                  draggable="false"
                  className="object-contain w-full h-full"
                  src={data.data.image}
                  alt={data.data.name}
                />
              </div>
            </div>
            <div className="h-full text-white space-y-2 p-5 bg-opacity-75 bg-gray-700 rounded-lg">
              <p className="text-5xl text-white font-bold ">
                <span className="text-yellow-500">{data.data.name}</span>
              </p>
              <p className="min-h-20">{data.data.description}</p>
              <p className="text-lg">
                KI :{" "}
                <span className="text-xl text-red-500 font-bold">
                  {data.data.ki}
                </span>
              </p>
              <p className="text-lg">
                MAX KI :{" "}
                <span className="text-xl text-yellow-500 font-bold">
                  {data.data.maxKi}
                </span>
              </p>
              <p className="text-lg">
                Raza :{" "}
                <span className="text-xl text-green-500 font-bold">
                  {data.data.race}
                </span>
              </p>
              <p className="text-lg">
                Sexo :{" "}
                <span className="text-xl font-bold">{data.data.gender}</span>
              </p>
              <p className="text-lg">
                {" "}
                Facción:{" "}
                <span className="text-xl font-bold">
                  {data.data.affiliation}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCharacter;
