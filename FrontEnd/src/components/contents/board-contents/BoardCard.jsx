import React from "react";
import "./BoardCard.css";
// import axios from "axios";

function BoardCard({ title, contents, created_by, timestamp, commentCount }) {
  return (
    <>
      <h2 className='boardcard-title'>{title}</h2>
      <p className='boardcard-timestamp'>{timestamp}</p>
      <h5 className='boardcard-created'>{created_by}</h5>
      <p className='reply-count'>💬{commentCount}</p>
      <hr />
      <p className='boardcard-content'>{contents}</p>
    </>
  );
}

export default BoardCard;
