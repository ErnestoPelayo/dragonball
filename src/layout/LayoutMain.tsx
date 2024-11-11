import { Outlet } from "react-router-dom";
import back from "../assets/bg.webp";

const LayoutMain = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main className="p-2 w-full mx-auto">
        <Outlet />
      </main>
      <div className="p-10 flex justify-center items-center h-16 bg-black bg-opacity-50 text-white">
        <p className="text-xl font-bold border-b-2">Dragon Ball 2024</p>
      </div>
    </div>
  );
};

export default LayoutMain;
