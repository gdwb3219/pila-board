import React, { useState } from "react";
import Comment from "./Comment";

function CommentList({ idx, list }) {
  console.log("commentList 렌더링");

  const [items, setItems] = useState(list);
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };
  return (
    <>
      <div className='list-container'>
        {list.slice(0, visibleItems).map((v, k) => {
          return (
            <>
              <hr />
              <Comment v={v} k={k} />
            </>
          );
        })}
        {visibleItems < items.length && (
          <button onClick={loadMore}>더 보기</button>
        )}
      </div>
    </>
  );
}

export default CommentList;
