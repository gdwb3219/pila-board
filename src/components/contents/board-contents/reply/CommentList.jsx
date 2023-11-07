import React, { useState } from "react";
import Comment from "./Comment";

function CommentList({ idx, list }) {
  const [items, setItems] = useState(list);
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };
  return (
    <>
      <div className='list-container'>
        {visibleItems < items.length && (
          <button onClick={loadMore}>더 보기</button>
        )}
        {list.slice(0, visibleItems).map((v, k) => {
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
