import React, { useState, useEffect } from "react";
import "./BoardCard.css";
// import axios from "axios";

function BoardCard({ idx, title, contents, created_by, timestamp }) {
  return (
    <>
      <h2>{title}</h2>
      <h5>{created_by}</h5>
      <hr />
      <p>{contents}</p>
      <p>{timestamp}</p>
    </>
  );
}

export default BoardCard;
