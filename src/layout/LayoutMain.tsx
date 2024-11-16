import { Outlet } from "react-router-dom";
import back from "../assets/bg.webp";

const LayoutMain = () => {
  return (
    <div
      className="fixed inset-0 h-screen w-screen"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen overflow-y-auto">
        <main className="p-2 w-full mx-auto">
          <Outlet />
        </main>
        <div className="p-10 flex justify-center items-center h-16 bg-black bg-opacity-50 text-white">
          <p className="text-xl font-bold border-b-2">Dragon Ball 2024</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
