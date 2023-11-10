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
    // setVisibleItems(items.length > visibleItems ? visibleItems : items.length);
    // let minusIndex = items.length > visibleItems ? visibleItems : items.length;
    // console.log(minusIndex, visibleItems, "빼기 몇?");
  };
  return (
    <>
      <div className='list-container'>
        {visibleItems < items.length && (
          <button onClick={loadMore}>더 보기</button>
        )}
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
