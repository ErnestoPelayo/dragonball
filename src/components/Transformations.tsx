import { useState } from "react";

const Transformations = ({ transformations, normal }: any) => {
  const [selectedTransformation, setSelectedTransformation] = useState(normal);

  const changeTransformation = (index: number) => {
    if (index === 0) {
      setSelectedTransformation(normal);
    } else {
      const transformation = transformations.find(
        (transformation: any) => transformation.id === index
      );
      setSelectedTransformation(transformation.image);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <p className="text-2xl text-white font-bold p-2">Transformations</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => changeTransformation(0)}
          className="bg-opacity-50 bg-yellow-500 text-white font-bold text-xl p-2 rounded-md"
        >
          0
        </button>
        {transformations.map((transformation: any, index: any) => (
          <button
            key={transformation.id}
            onClick={() => changeTransformation(transformation.id)}
            className="bg-opacity-50 bg-yellow-500 text-white font-bold text-xl p-2 rounded-md"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex items-center justify-center h-96 w-60">
          <img
            draggable="false"
            className="object-contain w-full h-full"
            src={selectedTransformation}
            alt={selectedTransformation}
          />
        </div>
      </div>
    </div>
  );
};

export default Transformations;
