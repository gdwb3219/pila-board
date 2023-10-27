import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./Reply.css";

// ----------------------------------------
// 게시 글 아래 부분 댓글 기능 전체
// 댓글 입력 Form
// 댓글 리스트
// ----------------------------------------

function Reply({ idx }) {
  const [commentList, setCommentList] = useState(
    JSON.parse(localStorage.getItem("commentList")) || []
  );

  useEffect(() => {
    console.log("Rerendering");
  }, [commentList]);
  return (
    <>
      <hr />
      <div className='comment-container'>
        <CommentForm />
        <CommentList idx={idx} list={commentList} />
      </div>
    </>
  );
}

export default Reply;
