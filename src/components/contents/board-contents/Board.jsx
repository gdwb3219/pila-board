import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Board.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import styled from "styled-components";

function Board() {
  const navigate = useNavigate();
  // 기본 불러오기 페이지 번호 (기본 1)
  const [page, setPage] = useState(1);
  // 게시판에 보이는 게시물 갯수 (기본 10)
  const [items, setItems] = useState(10);

  useEffect(() => {
    const storedBoardList = JSON.parse(localStorage.getItem("boardList"));
    if (storedBoardList) {
      setBoardList(storedBoardList);
    }
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  // useEffect(async() => {
  //   const res = await JSON.parse(axios.get("api/posts"));
  //   const posts = await res.json();
  //   if (posts) {
  //     setBoardList(posts);
  //   }
  // },[])

  // const [boardList, setBoardList] = useState(
  //   JSON.parse(axios.get("api/posts")) || []
  // );

  const [boardList, setBoardList] = useState(
    JSON.parse(localStorage.getItem("boradlist")) || []
  );

  const moveToWrite = () => {
    navigate("/write");
  };

  return (
    <>
      <div className='article-container'>
        <ul className='article-list'>
          {boardList
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((board) => (
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
          <PaginationBox className='PaginationBox'>
            <Pagination
              activePage={page}
              itemsCountPerPage={items}
              totalItemsCount={boardList.length - 1}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            ></Pagination>
          </PaginationBox>
        </div>
        <div>
          <button id='create-button' onClick={moveToWrite}>
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
}

// PaginationBox 에 대한 Styled component (Javascript 내에 CSS 넣는 기능)
const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #00faa6;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

export default Board;
