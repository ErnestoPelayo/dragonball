import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Main from "./views/Main";
import LayoutMain from "./layout/LayoutMain";
import DetailCharacter from "./views/DetailCharacter";
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<App />} index />
          <Route path="/characters" element={<Main />} />
          <Route path="/character/:id" element={<DetailCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
