import React from "react";

function Comment({ v, k }) {
  console.log("comment 렌더링");
  return (
    <>
      <div className='comment-container'>
        <div className='comment-content'>{v.content}</div>

        <div>key: {k}</div>
        <div className='add-on'>
          <div className='comment-user'>{v.createdBy}</div>
          <div className='comment-date'> 🕒{v.timestamp}</div>
          <div className='like'>👍 {v.like}</div>
          <div className='like'>👎 {v.dislike}</div>
        </div>
      </div>
    </>
  );
}

export default Comment;
