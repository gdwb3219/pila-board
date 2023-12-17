import './BoardContent.css';
import Board from './Board';
import { useState } from 'react';

function BoardContent() {
  return (
    <>
      <div className="wrapped">
        <h1>게시판</h1>
        <div className="Board-container">
          <div className="article-container">
            This is Board Component
            <Board />
          </div>
          <div>another Content</div>
        </div>
      </div>
    </>
  );
}

export default BoardContent;
