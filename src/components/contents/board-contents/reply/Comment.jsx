import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { v4 as uuidv4 } from "uuid";

function Comment({ v, k }) {
  const myUUID = uuidv4();
  console.log("comment 렌더링");

  const [like, setLike] = useState(v.like);
  const [dislike, setDislike] = useState(v.dislike);
  const [replyCount, setReplyCount] = useState(0);
  const [replyOpen, setReplyOpen] = useState(false);

  // 좋아요 버튼 누른 경우
  const handleLike = () => {
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    newCommentList[k].like = like + 1;
    localStorage.setItem("commentList", JSON.stringify(newCommentList));

    console.log(myUUID);
  };

  // 싫어요 버튼 누른 경우
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    newCommentList[k].dislike = dislike + 1;
    localStorage.setItem("commentList", JSON.stringify(newCommentList));
  };

  // 댓글 버튼 누른 경우
  const handleReply = () => {
    let newCommentList = JSON.parse(localStorage.getItem("commentList"));
    console.log(newCommentList[k].reply_list.length);
    setReplyOpen(!replyOpen);
  };

  // useEffect(() => {
  //   const storedCommentList = JSON.parse(localStorage.getItem("commentList"));
  //   if (storedCommentList) {
  //     // setData(storedCommentList);
  //   }
  // }, []);

  return (
    <>
      <div className='comment-container'>
        <div className='comment-content'>{v.content}</div>
        <div>key: {k}</div>
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
            <button className='reply-button' onClick={handleReply}>
              💬 {replyCount}
            </button>
          </div>
        </div>
        {replyOpen && <CommentForm />}
      </div>
    </>
  );
}

export default Comment;
