import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { useCommentContext } from '../../../../context/CommentContext';

function CommentList({ idx }) {
  console.log('22222222222222.CommentList 렌더링, "idx":', idx);
  // Local Storage Load 방식 변경, Comment List에서 로딩
  const INITIAL_localDB = JSON.parse(localStorage.getItem('commentList')) || [];

  const INITIALLIST =
    INITIAL_localDB.filter((comments) => comments.reply_list[0] === idx) || [];
  const [visibleItems, setVisibleItems] = useState(5);
  const [commentList, setCommentList] = useState(INITIALLIST);

  // const {
  //   commentContextState,
  //   setCommentContextState,
  //   showCommentForm,
  //   setShowCommentForm,
  // } = useCommentContext();

  // console.log(INITIALLIST, 'Initial');
  // console.log(commentContextState, 'Context List');
  // console.log(commentList, '렌더링 될 commentList 배열');

  // useEffect(() => {
  //   console.log(
  //     'CommentList의 useEffect 실행, context는 CommentList로 변경!!!'
  //   );
  //   setCommentContextState(commentList);
  // }, []);

  // console.log(
  //   commentList.slice(commentList.length - visibleItems, commentList.length),
  //   'element 검증 중',
  //   commentList.length - visibleItems,
  //   commentList.length
  // );

  const loadMore = () => {
    setVisibleItems((prev) =>
      commentList.length > prev + 5 ? prev + 5 : commentList.length
    );
  };
  const StartIndex =
    commentList.length - visibleItems > 0
      ? commentList.length - visibleItems
      : 0;

  console.log('CommentList 실행 끝 22222222222222222');
  return (
    <>
      <div className="list-container">
        <div className="button-container">
          {visibleItems < commentList.length && (
            <button className="loadMore-button" onClick={loadMore}>
              댓글 {commentList.length - visibleItems}개 더 보기
            </button>
          )}
        </div>

        {commentList.slice(StartIndex, commentList.length).map((v, k) => {
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
