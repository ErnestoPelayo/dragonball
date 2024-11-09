import { useEffect, useState } from "react";
import { Character } from "../types";

const NewCarrousel = ({ characters }: { characters: Character[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % characters.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [characters.length]);

  return (
    <div className="w-5/6 mx-auto max-h-screen">
      {characters.length > 0 && (
        <div className="flex justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <div
              className="relative h-full flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {characters.map((item: Character) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 flex items-center justify-center"
                >
                  <div
                    style={{ height: "90vh" }}
                    className="flex justify-between w-full"
                  >
                    <div className="w-full flex justify-center">
                      <img
                        src={item.image}
                        className=" object-cover"
                        alt={`Slide ${item.id}`}
                      />
                    </div>
                    <div className="w-1/2 bg-white/60 p-5">
                      <h1 className="text-4xl font-bold">{item.name}</h1>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
              {characters.map((_, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCarrousel;
