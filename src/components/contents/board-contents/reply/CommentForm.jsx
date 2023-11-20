import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CommentForm.css";
import { useCommentContext } from "../../../../context/CommentContext";

// 현재 시간 구하는 함수
const time = () => {
  const curr = new Date();
  // console.log("현재시간(Locale) : " + curr + "<br>"); // 현재시간(Locale) : Tue May 31 2022 09:00:30

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  return kr_curr;
};

function CommentForm({ idx }) {
  // console.log("11111111111111. CommentForm 렌더링 시작");

  // state 정의
  // comment State : 댓글 1개의 포맷
  const [comment, setComment] = useState({
    comment_id: "",
    content: "",
    timestamp: "",
    createdBy: "guest",
    like: 0,
    dislike: 0,
    reply_list: [idx],
  });

  // commentList Context State : 전체 댓글 리스트
  const { commentContextState, setCommentContextState } = useCommentContext();

  // comment 비구조 할당
  const { comment_id, content, timestamp, createdBy, like, dislike } = comment;

  // 최초 1회만 실행할 것들
  useEffect(() => {
    console.log(
      JSON.parse(localStorage.getItem("commentList")),
      "CommentForm useEffect: Local DB에서 가져온 comment List"
    );
    console.log("CommentForm useEffect: comment State", content);
  }, [comment]);

  // 서버 테스트용
  // useEffect(() => {
  //   fetch("/api/posts") // Django 서버의 '/api/posts' URL로 GET 요청을 보냄
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error("Error:", error));
  //   console.log(posts);
  // }, []);
  // console.log(posts, "DB 결과");

  const handleChange = (e) => {
    // text area에 키보드를 타이핑 할 때 실행
    const { name, value } = e.target;
    setComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  // Submit 클릭 시, 댓글이 하나 추가된다.
  const handleSubmit = (e) => {
    // e.preventDefault();
    const createUUID2 = uuidv4();

    // UUID와 시간 부여, *** state로 업데이트 하는게 아님 ***
    const submitComment = {
      ...comment,
      comment_id: createUUID2,
      timestamp: time(),
    };

    // Local Storage에서 List 가져온 후, new Comment 추가
    let temp_commentList =
      JSON.parse(localStorage.getItem("commentList")) || [];
    temp_commentList.push(submitComment);

    // setTempCommentList((prev) => [...prev, comment]);
    setCommentContextState((prev) => [...prev, submitComment]);

    // localStorage.setItem("commentList", JSON.stringify(commentContextState));
    localStorage.setItem("commentList", JSON.stringify(temp_commentList));
    console.log(
      "LocalStorage에 commentContextState Set 완료!!!!!!!!!!!!!!!!!!"
    );

    // alert("댓글이 등록되었습니다.");
    setComment((prev) => ({ ...prev, content: "" }));

    // Server POST 요청 TEST
    // fetch("/api/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(commentList),
    // }) // Django 서버의 '/api/posts' URL로 GET 요청을 보냄
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data))
    //   .catch((error) => console.error("Error:", error));
    // console.log(posts);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  console.log("CommentForm 끝111111111111");

  return (
    <>
      <form className='comment_fo' onSubmit={handleSubmit}>
        <div className='txtara'>
          <textarea
            name='content'
            value={content}
            placeholder='댓글을 입력해주세요'
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          ></textarea>
        </div>
        <div className='fnc'>
          <button type='submit' className='btn'>
            등록
          </button>
          <button className='btn'>취소</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
