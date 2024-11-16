import { useEffect, useState } from "react";
import { Character } from "../types";
import Card from "./Card";
import { Link } from "react-router-dom";

const Carrousel = ({ characters }: { characters: Character[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % characters.length);
  };

  const stopSlideShow = () => {
    setIsPaused(true);
  };

  const startSlideShow = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
      return () => clearInterval(interval);
    }
  }, [isPaused, currentSlide]);

  return (
    <div className="md:w-5/6 min-h-screen mx-auto flex flex-col items-center justify-center">
      <p className="font-black text-yellow-500 text-5xl lg:text-7xl xl:text-9xl p-2 mb-2">
        Dragonball-api
      </p>
      <div
        className="w-full h-96 mx-auto relative overflow-hidden 
        p-3 rounded-lg
        "
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {characters.map((character: Character) => (
            <div key={character.id} className="w-full flex-shrink-0">
              <Card
                character={character}
                stopSlideShow={stopSlideShow}
                startSlideShow={startSlideShow}
              />
            </div>
          ))}
        </div>
      </div>
      <Link
        className="mt-5 bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg"
        to={"/characters"}
      >
        Show all characters
      </Link>
    </div>
  );
};

export default Carrousel;
