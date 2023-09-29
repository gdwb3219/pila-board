import { Link, NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import boardList from "../../../mockdata.json";
import { Component } from "react";
import "./Board.css";

function Board() {
  return (
    <>
      <div>
        <ul className='article-list'>
          {boardList.map((board) => (
            // 4) map 함수로 데이터 출력
            <li className='article' key={board.idx}>
              <Link className='link' to={`/board/${board.idx}`}>
                {board.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant='info'>글쓰기</Button>
      </div>
      {/* <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>1</td>
                            <td>게시글1</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>2</td>
                            <td>게시글2</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>3</td>
                            <td>게시글2</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="info">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div> */}
    </>
  );
}

export default Board;
