import { Link } from "react-router-dom";

const BreadCrum = () => {
  return (
    <div className="flex text-4xl gap-2 w-full  mt-10 mb-10">
      <div className="flex gap-2 bg-black bg-opacity-50 px-10">
        <Link
          to={"/"}
          className="text-yellow-600 font-bold hover:text-yellow-400"
        >
          Home
        </Link>
        <Link
          to={"/characters"}
          className="text-yellow-600 font-bold hover:text-yellow-400"
        >
          Characters
        </Link>
      </div>
    </div>
  );
};

export default BreadCrum;
