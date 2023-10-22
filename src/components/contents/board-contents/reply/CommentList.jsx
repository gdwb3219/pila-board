import React from "react";

function CommentList({ idx, list }) {
  console.log(idx.idx);
  return (
    <>
      <div>
        {list.map((v, k) => {
          return (
            <>
              <div>{v.userId}</div>
              <div>{v.content}</div>
              <div>{v.date}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;
