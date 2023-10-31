import React, { useEffect, useState } from 'react';

function Comment({ v, k }) {
  console.log('comment 렌더링');

  const [like, setLike] = useState(v.like);
  const [dislike, setDislike] = useState(v.dislike);

  const handleLike = () => {
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[k].like = like + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[k].dislike = dislike + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  useEffect(() => {
    const storedCommentList = JSON.parse(localStorage.getItem('commentList'));
    if (storedCommentList) {
      // setData(storedCommentList);
    }
  }, []);

  return (
    <>
      <div className="comment-container">
        <div className="comment-content">{v.content}</div>

        <div>key: {k}</div>
        <div className="add-on">
          <div className="comment-user">{v.createdBy}</div>
          <div className="comment-date"> 🕒 {v.timestamp}</div>
          <div className="like">
            <button className="like-button" onClick={handleLike}>
              👍 {like}
            </button>
          </div>
          <div className="like">
            <button className="like-button" onClick={handleDislike}>
              👎 {dislike}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
