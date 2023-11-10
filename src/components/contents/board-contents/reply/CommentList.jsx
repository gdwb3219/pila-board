import React, { useState } from "react";
import Comment from "./Comment";

function CommentList({ idx, list }) {
  const [items, setItems] = useState(list);
  const [visibleItems, setVisibleItems] = useState(5);
  console.log(visibleItems, "visibleItems");

  const loadMore = () => {
    // setVisibleItems((prev) => prev + 5);
    setVisibleItems((prev) =>
      items.length > prev + 5 ? prev + 5 : items.length
    );
  };
  return (
    <>
      <div className='list-container'>
        <div className='button-container'>
          {visibleItems < items.length && (
            <button className='loadMore-button' onClick={loadMore}>
              댓글 {items.length - visibleItems}개 더 보기
            </button>
          )}
        </div>

        {list.slice(items.length - visibleItems, items.length).map((v, k) => {
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
