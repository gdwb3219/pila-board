import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Members from "./components/contents/members/Members";
import BoardContent from "./components/contents/board-contents/BoardContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='board' element={<BoardContent />} />
        <Route path='members' element={<Members />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
