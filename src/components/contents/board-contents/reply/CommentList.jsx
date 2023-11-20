import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useCommentContext } from "../../../../context/CommentContext";

function CommentList({ idx }) {
  console.log("22222222222222.CommentList 렌더링", idx);
  // Local Storage Load 방식 변경, Comment List에서 로딩
  const INITIALLIST =
    JSON.parse(localStorage.getItem("commentList")).filter(
      (comments) => comments.reply_list[0] === idx
    ) || [];
  const [visibleItems, setVisibleItems] = useState(5);

  const { commentContextState, setCommentContextState } = useCommentContext();

  const [commentList, setCommentList] = useState(INITIALLIST);

  console.log(commentContextState, "Context List");
  console.log(commentList, "렌더링 될 commentList 배열");

  useEffect(() => {
    console.log(
      "CommentList의 useEffect 실행, context는 CommentList로 변경!!!"
    );
    setCommentContextState(commentList);
  }, []);
  // console.log(setCommentContextState, "setter함수");

  // useEffect(() => {
  //   console.log("CommentList 에서 useEffect 실행", commentContextState);
  //   const storedCommentList =
  //     JSON.parse(localStorage.getItem("commentList")) || [];
  //   if (storedCommentList) {
  //     setCommentList(storedCommentList);
  //     console.log(
  //       "2. storedCommentList, 빈 CommentList에 localStorage 여부 파악해서 로딩 없으면 말고"
  //     );
  //   }
  // }, []);

  const loadMore = () => {
    // setVisibleItems((prev) => prev + 5);
    setVisibleItems((prev) =>
      commentList.length > prev + 5 ? prev + 5 : commentList.length
    );
  };

  console.log("CommentList 실행 끝 22222222222222222");
  return (
    <>
      <div className='list-container'>
        <div className='button-container'>
          {visibleItems < commentList.length && (
            <button className='loadMore-button' onClick={loadMore}>
              댓글 {commentList.length - visibleItems}개 더 보기
            </button>
          )}
        </div>

        {commentList
          .slice(commentList.length - visibleItems, commentList.length)
          .map((v, k) => {
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
