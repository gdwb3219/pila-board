import React, { useState } from 'react';
import Comment from './Comment';

function CommentList2({ idx }) {
  console.log('22222222222222.CommentList2 렌더링, "idx":', idx);
  // Local Storage Load 방식 변경, Comment List에서 로딩
  const INITIAL_localDB = JSON.parse(localStorage.getItem('commentList')) || [];

  const INITIALLIST =
    INITIAL_localDB.filter((comments) => comments.reply_list[0] === idx) || [];
  const [visibleItems, setVisibleItems] = useState(3);
  const [commentList, setCommentList] = useState(INITIALLIST);

  const loadMore = () => {
    setVisibleItems((prev) =>
      commentList.length > prev + 3 ? prev + 3 : commentList.length
    );
  };
  const StartIndex =
    commentList.length - visibleItems > 0
      ? commentList.length - visibleItems
      : 0;

  console.log(
    'CommentList2 실행 끝 2222222222222222222222222222222222222222222222'
  );
  return (
    <>
      {INITIALLIST.length && (
        <div className="list-container">
          <div className="button-container">
            {visibleItems < commentList.length && (
              <button className="loadMore-button" onClick={loadMore}>
                댓글 {commentList.length - visibleItems}개 더 보기
              </button>
            )}
          </div>

          {commentList.slice(StartIndex, commentList.length).map((v, k) => {
            return (
              <>
                <hr />
                <Comment v={v} k={k} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CommentList2;
