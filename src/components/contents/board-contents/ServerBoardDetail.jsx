import React, { useEffect, useState } from "react";
import BoardCard from "./BoardCard";
import { useParams } from "react-router-dom";
// import boardList from "../../../mockdata.json";
import Reply from "./reply/Reply";
import "./BoardDetail.css";
import { CommentContextProvider } from "../../../context/CommentContext";
import axios from "axios";

// ----------------------------------------
// 게시판 글 목록 클릭해서 세부 게시글로 이동
// 네비게이션 바
// 글 내용
// 댓글
// Footer
// ----------------------------------------

function ServerBoardDetail() {
  const { idx } = useParams();
  // const [instance, setInstance] = useState({});

  const INITIAL_CONTENT = JSON.parse(localStorage.getItem("boardList"));
  const CONTENTS = INITIAL_CONTENT.filter(
    (contents) => contents.idx === Number(idx)
  )[0];

  // 단일 인스턴스

  // useEffect(() => {
  //   fetch(`http://localhost:8000/api/boardlist/${idx}/`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setInstance(res);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching post detail:", error);
  //     });
  // }, []);

  const INITIAL_localDB = JSON.parse(localStorage.getItem("commentList")) || [];

  const INITIALLIST =
    INITIAL_localDB.filter((comments) => comments.reply_list[0] === idx) || [];
  const [commentList, setCommentList] = useState(INITIALLIST);

  // const { title, contents, createdBy, hashtag, timestamp } = instance;

  return (
    <>
      <div className='wrapped'>
        <div className='contents'>
          <BoardCard commentCount={commentList.length} />
          <CommentContextProvider>
            <Reply idx={idx} />
          </CommentContextProvider>
        </div>
      </div>
    </>
  );
}

export default ServerBoardDetail;
