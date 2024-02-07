import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Members from "./components/contents/members/Members";
import BoardContent from "./components/contents/board-contents/BoardContent";
import BoardDetail from "./components/contents/board-contents/BoardDetail";
import InputForm from "./components/contents/board-contents/InputForm";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import SignUp from "./components/contents/members/SignUp";
// import OAuth from "./components/contents/members/OAuth";
import KakaoLogin from "./components/contents/members/KakaoLogin";
import KakaoLogout from "./components/contents/members/KakaoLogout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Navbar />      
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='board' element={<BoardContent />} />
      <Route path='members' element={<Members />} />
      <Route path='/board/:idx' element={<BoardDetail />} />
      <Route path='/write' element={<InputForm />} />
      <Route path="/auth/kakaoc/allback" element={<KakaoLogin />} />
      <Route path="/logout" element={<KakaoLogout />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  // </React.StrictMode>
);
