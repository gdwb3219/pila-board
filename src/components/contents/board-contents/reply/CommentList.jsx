import React from 'react';
import Comment from './Comment';

function CommentList({ idx, list }) {
  console.log('commentList 렌더링');
  return (
    <>
      <div className="list-container">
        {list.map((v, k) => {
          return (
            <>
              <hr />
              <Comment v={v} k={k} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;
