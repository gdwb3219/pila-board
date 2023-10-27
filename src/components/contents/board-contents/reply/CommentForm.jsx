import React, { useEffect, useState } from "react";

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

function CommentForm() {
  // state 정의
  const [comment, setComment] = useState({
    comment_id: "",
    content: "",
    timestamp: time(),
    createdBy: "guest",
    like: 0,
    dislike: 0,
    reply_list: [],
  });

  const [commentList, setCommentList] = useState([]);

  const { comment_id, content, timestamp, createdBy, like, dislike } = comment;

  useEffect(() => {
    const storedCommentList = JSON.parse(localStorage.getItem("commentList"));
    if (storedCommentList) {
      setCommentList(storedCommentList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("commentList", JSON.stringify(commentList));
  }, [commentList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  // Submit 클릭 시, 댓글이 하나 추가된다.
  const handleSubmit = () => {
    setCommentList([...commentList, comment]);
    // event data를 List에 추가하는 함수 필요
  };

  return (
    <>
      <div className='comment_fo'>
        <div className='txtara'>
          <textarea
            name='content'
            value={content}
            placeholder='댓글을 입력해주세요'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='fnc'>
          <button className='btn' onClick={handleSubmit}>
            등록
          </button>
          <button className='btn'>취소</button>
        </div>
      </div>
    </>
  );
}

export default CommentForm;
