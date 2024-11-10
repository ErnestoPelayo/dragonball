import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Main from "./views/Main";
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} index />
        <Route path="/characters" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
