import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Reply.css';
import './Comment.css';

// ----------------------------------------
// 게시 글 아래 부분 댓글 기능 전체
// 댓글 입력 Form
// 댓글 리스트
// ----------------------------------------

function Reply({ idx }) {
  return (
    <>
      <hr />
      <div className="reply-container">
        <CommentForm idx={idx} />
        <CommentList idx={idx} />
      </div>
    </>
  );
}

export default Reply;
