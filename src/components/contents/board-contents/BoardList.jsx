import React, { useState } from "react";
import "./BoardList.css";
// import axios from "axios";

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  // const getBoardList = async () => {
  //   const res = await axios.get("//localhost:8080/board").console.log(res.data);
  // };

  return (
    <>
      <h3 className='HeaderTitle'>게시판 목록 출력</h3>
    </>
  );
}

export default BoardList;
