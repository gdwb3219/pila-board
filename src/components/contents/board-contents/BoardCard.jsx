import React from 'react';
import './BoardCard.css';
// import axios from "axios";

function BoardCard({ title, contents, createdBy, timestamp, commentCount }) {
  return (
    <>
      <div className="BoardCard-component-container">
        <p className="boardcard-title">{title}</p>
        <div className="sub-title-container">
          <p className="boardcard-timestamp">{timestamp}</p>
          <p className="boardcard-created">작성자 : {createdBy}</p>
          <p className="reply-count">💬{commentCount}</p>
        </div>
        <hr />
        <p className="boardcard-content">{contents}</p>
      </div>
    </>
  );
}

export default BoardCard;
