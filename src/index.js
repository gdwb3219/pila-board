import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Members from "./components/contents/members/Members";
import BoardContent from "./components/contents/board-contents/BoardContent";
import BoardDetail from "./components/contents/board-contents/BoardDetail";
import InputForm from "./components/contents/board-contents/InputForm"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='board' element={<BoardContent />} />
        <Route path='members' element={<Members />} />
        <Route path='/board/:idx' element={<BoardDetail />} />
        <Route path='/write' element={<InputForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
