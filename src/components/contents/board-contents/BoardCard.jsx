import React from "react";
import "./BoardCard.css";
// import axios from "axios";

function BoardCard({ idx, title, contents, created_by, timestamp }) {
  return (
    <>
      <h2 className='boardcard-title'>{title}</h2>
      <h5 className='boardcard-created'>{created_by}</h5>
      <hr />
      <p className='boardcard-content'>{contents}</p>
      <p className='boardcard-timestamp'>{timestamp}</p>
    </>
  );
}

export default BoardCard;
