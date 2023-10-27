import React from "react";
import Comment from "./Comment";

function CommentList({ idx, list }) {
  console.log("commentList 렌더링");
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
