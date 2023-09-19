import { Link, NavLink } from "react-router-dom";
import "./BoardContent.css";
import BoardList from "./BoardList";
import Board from "./Board";

function BoardContent() {
  return (
    <>
      <h1>게시판</h1>
      <div className='Board-container'>
        This is Board Component
        <BoardList />
      </div>
    </>
  );
}

export default BoardContent;
