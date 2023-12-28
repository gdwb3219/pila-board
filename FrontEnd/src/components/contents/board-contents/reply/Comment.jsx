import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { useCommentContext } from "../../../../context/CommentContext";
import CommentList2 from "./CommentList2";
import DeleteButton from "./DeleteButton";

function Comment({ v }) {
  console.log("Comment Render!!!");
  // comment 내부 Key Factor State 정의
  // { --------------------
  //   comment_id   :   uuid
  //   content      :   내용
  //   createBy     :   작성자
  //   dislike      :   싫어요
  //   like         :   좋아요
  //   reply_list   :   댓글이 속한 게시글
  //   timestamp    :   작성 시간
  // } --------------------

  // 초기 댓글 DB 데이터 로드
  const INITIAL_localDB = JSON.parse(localStorage.getItem("commentList")) || [];
  const INITIALLIST =
    INITIAL_localDB.filter(
      (comments) => comments.reply_list[0] === v.comment_id
    ) || [];

  const [commentID, setCommentID] = useState(v.comment_id);
  const [like, setLike] = useState(v.like);
  const [dislike, setDislike] = useState(v.dislike);

  const { isOpen, setIsOpen, openKey, setOpenKey } = useCommentContext();

  // 좋아요 버튼 누른 경우
  const handleLike = (e) => {
    // console.log(e);
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    localStorage.setItem("commentList", JSON.stringify(newCommentList));
  };

  // 싫어요 버튼 누른 경우
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    newCommentList[commentID].dislike = dislike + 1;
    localStorage.setItem("commentList", JSON.stringify(newCommentList));
  };

  // 댓글 버튼 누른 경우
  const handleReply = () => {
    // 댓글 버튼 누르면 Reply Open True, 댓글 Comment Form False
    if (isOpen === false && openKey !== commentID) {
      setOpenKey(commentID);
      setIsOpen(true);
    } else if (isOpen === true && openKey !== commentID) {
      setOpenKey(commentID);
    } else if (isOpen === true && openKey === commentID) {
      setIsOpen(false);
      setOpenKey();
    } else {
      console.log("It's Wrong Ediot!");
    }
  };

  // 삭제 버튼 누르는 경우
  const handleDelete = () => {
    let delete_commentList = JSON.parse(localStorage.getItem("commentList"));
    const deleted_commentList = delete_commentList.filter(
      (comment) => comment.comment_id !== commentID
    );
    localStorage.setItem("commentList", JSON.stringify(deleted_commentList));
  };

  const showBoolean = isOpen === true && openKey === commentID;

  // 대댓글 리스트 개수
  // console.log(INITIALLIST.length, "대댓글 갯수 확인");

  return (
    <>
      <div className='comment-container'>
        <div className='comment-content'>{v.content}</div>
        <div className='uuid'>key: {v.comment_id}</div>
        <div className='add-on'>
          <div className='comment-user'>{v.createdBy}</div>
          <div className='comment-date'> 🕒 {v.timestamp}</div>
          <div className='like'>
            <button className='like-button' onClick={handleLike}>
              👍 {like}
            </button>
            <button className='like-button' onClick={handleDislike}>
              👎 {dislike}
            </button>
            <button
              className='reply-button'
              id={v.comment_id}
              onClick={handleReply}
            >
              💬 {INITIALLIST.length}
            </button>
          </div>
          {/* <button className="delete-button" onClick={handleDelete}>
            삭제
          </button> */}
          <DeleteButton k={commentID} />
        </div>
        <div id='replyform-container'>
          <CommentForm idx={v.comment_id} show={showBoolean} />
        </div>

        {(INITIALLIST.length > 0 ? true : false) && (
          <CommentList2 idx={v.comment_id} />
        )}
      </div>
    </>
  );
}

export default Comment;
