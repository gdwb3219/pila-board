import React, { useState } from "react";
import { useCommentContext } from "../../../../context/CommentContext";

function Comment2({ v, k }) {
  console.log("Comment222 Render!!!");
  // comment 내부 Key Factor State 정의
  // { ----------------------------------------
  //   comment_id   :   uuid
  //   content      :   내용
  //   createBy     :   작성자
  //   dislike      :   싫어요
  //   like         :   좋아요
  //   reply_list   :   댓글이 속한 게시글
  //   timestamp    :   작성 시간
  // } ----------------------------------------

  // const INITIAL_localDB = JSON.parse(localStorage.getItem('commentList')) || [];

  // const INITIALLIST =
  //   INITIAL_localDB.filter(
  //     (comments) => comments.comment_id === v.comment_id
  //   ) || [];

  const [commentID, setCommentID] = useState(v.comment_id);
  const [like, setLike] = useState(v.like);
  const [dislike, setDislike] = useState(v.dislike);
  const [replyOpen, setReplyOpen] = useState(false);

  const { showCommentForm } = useCommentContext();

  // console.log(showCommentForm, replyOpen, '댓글창, 댓글');

  // 좋아요 버튼 누른 경우
  const handleLike = () => {
    // console.log(e);
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    // let newComment = newCommentList.filter(
    //   (comment) => comment.comment_id === v.comment_id
    // );
    // newComment.like = like + 1;
    localStorage.setItem("commentList", JSON.stringify(newCommentList));
  };

  // 싫어요 버튼 누른 경우
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    newCommentList[commentID].dislike = dislike + 1;
    localStorage.setItem("commentList", JSON.stringify(newCommentList));
  };

  return (
    <>
      <div className='replybox-container'>
        <div>└</div>
        <div className='reply-container'>
          <div className='comment-content'>{v.content}</div>
          <div className='uuid'>key: {commentID}</div>
          <div className='add-on'>
            <div className='comment-user'>{v.createdBy}</div>
            <div className='comment-date'> 🕒 {v.timestamp}</div>
            <div className='replylike'>
              <button className='like-button' onClick={handleLike}>
                👍 {like}
              </button>
              <button className='like-button' onClick={handleDislike}>
                👎 {dislike}
              </button>
            </div>
            <button className='delete-button'>삭제</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment2;
