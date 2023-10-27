import React from "react";
import Comment from "./Comment";

function CommentList({ idx, list }) {
  console.log("commentList Rerender?");
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
