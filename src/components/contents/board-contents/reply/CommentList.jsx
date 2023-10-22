import React from 'react';
import Comment from './Comment';

function CommentList({ idx, list }) {
  console.log(idx);
  return (
    <>
      <div>
        {list.map((v, k) => {
          return (
            <>
              <Comment v={v} k={k} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;
