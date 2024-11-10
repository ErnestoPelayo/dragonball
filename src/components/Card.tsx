import { useState } from "react";
import { Character } from "../types";
type CardProps = {
  character: Character;
  stopSlideShow: () => void;
  startSlideShow: () => void;
};
const Card = ({ character, stopSlideShow, startSlideShow }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex w-full h-full"
      onMouseEnter={() => {
        stopSlideShow();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        startSlideShow();
        setIsHovered(false);
      }}
    >
      {/* Contenedor de la imagen */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img
          draggable="false"
          className="object-contain w-full h-full hover:scale-105"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="w-1/2 h-full text-white space-y-2 p-5">
        <p className="text-2xl text-white font-bold">{character.name}</p>
        <p className="line-clamp-4 min-h-20">{character.description}</p>
        {isHovered ? (
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg">
            Ver mas información
          </button>
        ) : (
          <>
            <p className="text-lg">
              KI :{" "}
              <span className="text-xl text-red-500 font-bold">
                {character.ki}
              </span>
            </p>
            <p className="text-lg">
              MAX KI :{" "}
              <span className="text-xl text-yellow-500 font-bold">
                {character.maxKi}
              </span>
            </p>
            <p className="text-lg">
              Raza :{" "}
              <span className="text-xl text-green-500 font-bold">
                {character.race}
              </span>
            </p>
            <p className="text-lg">
              Sexo :{" "}
              <span className="text-xl font-bold">{character.gender}</span>
            </p>
            <p className="text-lg">
              {" "}
              Facción:{" "}
              <span className="text-xl font-bold">{character.affiliation}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
