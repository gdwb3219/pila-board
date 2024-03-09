import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import InputForm from "../create/InputForm";

function ServerBoard() {
  // 기본 불러오기 페이지 번호 (기본 1)
  const [page, setPage] = useState(1);
  // 게시판에 보이는 게시물 갯수 (기본 10)
  const [items, setItems] = useState(10);
  const [isModal, setIsModal] = useState(false);

  const [boardList, setboardList] = useState([]);
  console.log(boardList, "ServerBoardList");
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/boardlist/"
        );
        setboardList(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchList();

    if (isModal === true) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isModal]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const moveToWrite = () => {
    setIsModal(true);
    // navigate('/write');
  };

  return (
    <>
      <div className='article-container'>
        <ul className='article-list'>
          {boardList
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((board) => (
              <li className='article' key={board.id}>
                <Link className='link' to={`/board/${board.id}`}>
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
      {isModal && <InputForm isModal={isModal} setIsModal={setIsModal} />}
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
    color: #333;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #005000;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: skyblue;
  }
`;
export default ServerBoard;
