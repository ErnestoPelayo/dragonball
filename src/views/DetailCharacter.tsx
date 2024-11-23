import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../api/Characters";
import Transformations from "../components/Transformations";
import Loading from "../components/Loading";
import BreadCrum from "../components/BreadCrum";

const DetailCharacter = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(Number(id)),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="md:w-5/6 mx-auto">
      <p className="font-black text-yellow-500 text-5xl lg:text-7xl xl:text-9xl p-2 mb-4">
        Fighter
      </p>
      <BreadCrum />
      {data && data.data && (
        <div className="flex flex-col space-y-6">
          {/* About Section */}
          <div className="w-full mx-auto">
            <p className="text-white text-5xl md:text-9xl text-center font-black bg-black bg-opacity-50 mb-4">
              About
            </p>
            <div className="grid md:grid-cols-2 gap-6 mx-auto items-center">
              <div className="flex justify-center items-center">
                {data.data.transformations.length > 0 ? (
                  <Transformations
                    transformations={data.data.transformations}
                    normal={data.data.image}
                  />
                ) : (
                  <img
                    draggable="false"
                    className="object-contain w-full h-auto max-h-96"
                    src={data.data.image}
                    alt={data.data.name}
                  />
                )}
              </div>
              <div className="text-white space-y-4 p-5 bg-opacity-50 bg-black rounded-lg">
                <p className="text-5xl font-bold">
                  <span className="text-yellow-500">{data.data.name}</span>
                </p>
                <p>{data.data.description}</p>
                <p className="text-lg">
                  KI:{" "}
                  <span className="text-xl text-red-500 font-bold">
                    {data.data.ki}
                  </span>
                </p>
                <p className="text-lg">
                  MAX KI:{" "}
                  <span className="text-xl text-yellow-500 font-bold">
                    {data.data.maxKi}
                  </span>
                </p>
                <p className="text-lg">
                  Raza:{" "}
                  <span className="text-xl text-green-500 font-bold">
                    {data.data.race}
                  </span>
                </p>
                <p className="text-lg">
                  Sexo:{" "}
                  <span className="text-xl font-bold">{data.data.gender}</span>
                </p>
                <p className="text-lg">
                  Facción:{" "}
                  <span className="text-xl font-bold">
                    {data.data.affiliation}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Planet Section */}
          <div className="w-full mx-auto">
            <p className="text-white text-5xl md:text-9xl text-center font-black bg-black bg-opacity-50 mb-4">
              Planet
            </p>
            {data.data.originPlanet && (
              <div className="grid md:grid-cols-2 mx-auto w-full max-w-5xl">
                <div className="flex flex-col justify-center md:justify-start bg-black bg-opacity-50 p-5 space-y-3">
                  <p className="text-5xl text-white font-bold">Information</p>
                  <p className="text-2xl text-white font-bold">
                    Name:{" "}
                    <span className="text-yellow-500">
                      {data.data.originPlanet.name}
                    </span>
                  </p>
                  <p className="text-2xl text-white font-bold">Description </p>
                  <p className=" text-yellow-500 font-bold">
                    {data.data.originPlanet.description}
                  </p>
                  <div className="text-2xl text-white font-bold flex items-center">
                    <p className="p-2"> Destroyed : {"   "}</p>
                    {data.data.originPlanet.isDestroyed ? (
                      <p className="text-lg bg-red-500 rounded-full p-1 px-2">
                        True
                      </p>
                    ) : (
                      <p className="text-lg bg-green-500 rounded-full p-1 px-2">
                        False
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    draggable="false"
                    className="object-contain w-full h-auto max-h-96 rounded-lg"
                    src={data.data.originPlanet.image}
                    alt={data.data.originPlanet.name}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCharacter;
