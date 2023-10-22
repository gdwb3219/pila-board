import React from 'react';

function Comment({ v, k }) {
  return (
    <>
      <div className="comment-user">user-id: {v.userId}</div>
      <div className="comment-content">내용: {v.content}</div>
      <div className="comment-date">날짜: {v.date}</div>
      <div>key: {k}</div>
    </>
  );
}

export default Comment;
