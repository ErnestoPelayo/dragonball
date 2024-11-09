import { useState } from "react";
import { Character } from "../types";
// Asegúrate de que la ruta es correcta

const Carrousel = ({ characters }: { characters: Character[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = characters;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" w-full flex justify-center ">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <div
          className="relative h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((item: Character) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={item.image}
                className=" object-cover h-1/2"
                alt={`Slide ${item.id}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 z-30 bg-white/30 dark:bg-gray-800/30"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <span className="text-black dark:text-white text-2xl">&#9664;</span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 z-30 bg-white/30 dark:bg-gray-800/30"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <span className="text-black dark:text-white text-2xl">&#9654;</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
