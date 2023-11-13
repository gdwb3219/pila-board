import React, { useState } from 'react';
import Comment from './Comment';
import { v4 as uuidv4 } from 'uuid';

function CommentList({ commentList }) {
  const [items, setItems] = useState(commentList);
  const [visibleItems, setVisibleItems] = useState(5);
  // console.log(commentList[13].comment_id);

  const loadMore = () => {
    // setVisibleItems((prev) => prev + 5);
    setVisibleItems((prev) =>
      items.length > prev + 5 ? prev + 5 : items.length
    );
  };
  return (
    <>
      <div className="list-container">
        <div className="button-container">
          {visibleItems < items.length && (
            <button className="loadMore-button" onClick={loadMore}>
              댓글 {items.length - visibleItems}개 더 보기
            </button>
          )}
        </div>

        {commentList
          .slice(items.length - visibleItems, items.length)
          .map((commentElement) => {
            return (
              <>
                <hr />
                <li>
                  <Comment
                    element={commentElement}
                    key={commentElement.comment_id}
                  />
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}

export default CommentList;
