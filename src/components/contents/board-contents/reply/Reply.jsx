import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./Reply.css";
import "./Comment.css";

// ----------------------------------------
// 게시 글 아래 부분 댓글 기능 전체
// 댓글 입력 Form
// 댓글 리스트
// ----------------------------------------

function Reply({ idx }) {
  console.log("Reply 렌더링");
  const [commentList, setCommentList] = useState(
    JSON.parse(localStorage.getItem("commentList")) || []
  );

  useEffect(() => {
    console.log("Reply 내부 useEffect 렌더링");
    const storedCommentList =
      JSON.parse(localStorage.getItem("commentList")) || [];
  }, [commentList]);

  return (
    <>
      <hr />
      <div className='reply-container'>
        <CommentForm />
        <CommentList idx={idx} list={commentList} />
      </div>
    </>
  );
}

export default Reply;
