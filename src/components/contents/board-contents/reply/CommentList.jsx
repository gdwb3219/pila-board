import React, { useState } from 'react';
import Comment from './Comment';

function CommentList({ idx }) {
  console.log('22222222222222.CommentList 렌더링, "idx":', idx);
  // Local Storage Load 방식 변경, Comment List에서 로딩
  const INITIAL_localDB = JSON.parse(localStorage.getItem('commentList')) || [];

  const INITIALLIST =
    INITIAL_localDB.filter((comments) => comments.reply_list[0] === idx) || [];
  const [visibleItems, setVisibleItems] = useState(5);
  const [commentList, setCommentList] = useState(INITIALLIST);

  const loadMore = () => {
    setVisibleItems((prev) =>
      commentList.length > prev + 5 ? prev + 5 : commentList.length
    );
  };
  const StartIndex =
    commentList.length - visibleItems > 0
      ? commentList.length - visibleItems
      : 0;

  console.log(
    'CommentList 실행 끝 2222222222222222222222222222222222222222222222'
  );
  return (
    <>
      <div className="list-container">
        {visibleItems < commentList.length && (
          <button className="loadMore-button" onClick={loadMore}>
            댓글 {commentList.length - visibleItems}개 더 보기
          </button>
        )}

        {commentList.slice(StartIndex, commentList.length).map((v) => {
          return (
            <>
              <hr />
              <Comment v={v} k={v.comment_id} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;
