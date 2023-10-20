import { Link, NavLink, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import mockBoardList from "../../../mockdata.json";
import { Component } from "react";
import "./Board.css";
import { useState, useEffect } from "react";

const stringList = JSON.stringify(boardList);
window.localStorage.setItem("mockList", stringList);

function Board() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedBoardList = JSON.parse(localStorage.getItem("boardList"));
    if (storedBoardList) {
      setBoardList(storedBoardList);
    }
  }, []);


  const [boardList, setBoardList] = useState(
    JSON.parse(localStorage.getItem("boardList")) || []
  );

  const moveToWrite = () => {
    navigate("/write");
  };

  return (
    <>
      <div className='article-container'>
        <ul className='article-list'>
          {boardList.map((board) => (
            // 4) map 함수로 데이터 출력
            <li className='article' key={board.idx}>
              <Link className='link' to={`/board/${board.idx}`}>
                {board.title}
              </Link>
              <div className='sub-button'>
                <a href='/' className='good-button'>
                  좋아요
                </a>
                <a href='/' className='reply'>
                  댓글
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <Button onClick={moveToWrite}>글쓰기</Button>
        </div>
      </div>
    </>
  );
}

export default Board;
