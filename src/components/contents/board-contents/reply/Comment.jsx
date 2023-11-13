import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';

function Comment({ element }) {
  const [key, setKey] = useState(element.comment_id);
  const [like, setLike] = useState(element.like);
  const [dislike, setDislike] = useState(element.dislike);
  const [replyCount, setReplyCount] = useState(0);
  const [replyOpen, setReplyOpen] = useState(false);

  console.log('comment 렌더링', element.comment_id);

  // 좋아요 버튼 누른 경우
  const handleLike = () => {
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[key].like = like + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  // 싫어요 버튼 누른 경우
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[key].dislike = dislike + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  // 댓글 버튼 누른 경우
  const handleReply = () => {
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    // console.log(newCommentList[element.comment_id].reply_list.length);
    setReplyOpen(!replyOpen);
  };

  useEffect(() => {
    const storedCommentList = JSON.parse(localStorage.getItem('commentList'));
    if (storedCommentList) {
      // setData(storedCommentList);
    }
  }, []);

  return (
    <>
      <div className="comment-container">
        <div className="comment-content">{element.content}</div>
        <div>key: {key}</div>
        <div className="add-on">
          <div className="comment-user">{element.createdBy}</div>
          <div className="comment-date"> 🕒 {element.timestamp}</div>
          <div className="like">
            <button className="like-button" onClick={handleLike}>
              👍 {like}
            </button>
            <button className="like-button" onClick={handleDislike}>
              👎 {dislike}
            </button>
            <button className="reply-button" onClick={handleReply}>
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
