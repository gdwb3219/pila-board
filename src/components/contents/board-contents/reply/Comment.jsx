import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import { useCommentContext } from '../../../../context/CommentContext';

function Comment({ v, k }) {
  // comment 내부 Key Factor State 정의
  // { --------------------
  //   comment_id   :   uuid
  //   content      :   내용
  //   createBy     :   작성자
  //   dislike      :   싫어요
  //   like         :   좋아요
  //   reply_list   :   댓글이 속한 게시글
  //   timestamp    :   작성 시간
  // } --------------------
  const [key, setKey] = useState(v.comment_id);
  const [like, setLike] = useState(v.like);
  const [dislike, setDislike] = useState(v.dislike);
  const [replyCount, setReplyCount] = useState(0);
  const [replyOpen, setReplyOpen] = useState(false);

  const { showCommentForm, setShowCommentForm } = useCommentContext();

  // 좋아요 버튼 누른 경우
  const handleLike = (e) => {
    console.log(e);
    setLike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[0].like = like + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  // 싫어요 버튼 누른 경우
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    newCommentList[key].dislike = dislike + 1;
    localStorage.setItem('commentList', JSON.stringify(newCommentList));
  };

  // 댓글 버튼 누른 경우
  const handleReply = () => {
    let newCommentList = JSON.parse(localStorage.getItem('commentList'));
    // console.log(newCommentList[element.comment_id].reply_list.length);

    console.log(v.comment_id, 'v.id');
    setReplyOpen((prev) => !prev);
    console.log('ReplyOpenReplyOpenReplyOpenReplyOpen', replyOpen);
    setShowCommentForm(!showCommentForm);
    console.log(
      'showCommentFormshowCommentFormshowCommentForm',
      showCommentForm
    );
  };

  return (
    <>
      <div className="comment-container">
        <div className="comment-content">{v.content}</div>
        <div>key: {key}</div>
        <div className="add-on">
          <div className="comment-user">{v.createdBy}</div>
          <div className="comment-date"> 🕒 {v.timestamp}</div>
          <div className="like">
            <button className="like-button" onClick={handleLike}>
              👍 {like}
            </button>
            <button className="like-button" onClick={handleDislike}>
              👎 {dislike}
            </button>
            <button
              className="reply-button"
              id={v.comment_id}
              onClick={handleReply}
            >
              💬 {replyCount}
            </button>
          </div>
        </div>
        {replyOpen && 'Hi'}
        {replyOpen && <CommentForm />}
      </div>
    </>
  );
}

export default Comment;
