import React, { useState } from 'react';

import Comment2 from './Comment2';

const COUNT = 3;

function CommentList2({ idx }) {
  console.log('22222222222222.CommentList2 렌더링, "idx":', idx);
  // Local Storage Load 방식 변경, Comment List에서 로딩
  const INITIAL_localDB = JSON.parse(localStorage.getItem('commentList')) || [];

  const INITIALLIST =
    INITIAL_localDB.filter((comments) => comments.reply_list[0] === idx) || [];
  const [visibleItems, setVisibleItems] = useState(COUNT);

  const loadMore = () => {
    setVisibleItems((prev) =>
      INITIALLIST.length > prev + COUNT ? prev + COUNT : INITIALLIST.length
    );
  };
  const StartIndex =
    INITIALLIST.length - visibleItems > 0
      ? INITIALLIST.length - visibleItems
      : 0;

  console.log(
    'CommentList2 실행 끝 2222222222222222222222222222222222222222222222'
  );
  return (
    <>
      <div className="replylist-container">
        {INITIALLIST.slice(StartIndex, INITIALLIST.length).map((v) => {
          return (
            <>
              <hr />
              <Comment2 v={v} k={v.comment_id} />
            </>
          );
        })}
        {visibleItems < INITIALLIST.length && (
          <button className="replyMore-button" onClick={loadMore}>
            대댓글 {INITIALLIST.length - visibleItems}개 더 보기
          </button>
        )}
      </div>
    </>
  );
}

export default CommentList2;
