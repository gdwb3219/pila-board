import React from 'react';

function Comment({ v, k }) {
  console.log('comment 렌더링');
  return (
    <>
      <div className="comment-container">
        <div className="comment-user">user-id: {v.createdBy}</div>
        <div className="comment-content">내용: {v.content}</div>
        <div className="comment-date">날짜: {v.timestamp}</div>
        <div>key: {k}</div>
        <div className="like">좋아요 : {v.like}</div>
        <div className="dislike">싫어요 : {v.dislike}</div>
      </div>
    </>
  );
}

export default Comment;
