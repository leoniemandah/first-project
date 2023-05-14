import App from "./App";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/page1" element={<Page1 />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>
    </Routes>
  );
};
