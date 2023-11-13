import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CommentForm.css';

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
  console.log('1. CommentForm 렌더링');
  // state 정의
  // comment State : 댓글 1개의 포맷
  const [comment, setComment] = useState({
    comment_id: '',
    content: '',
    timestamp: time(),
    createdBy: 'guest',
    like: 0,
    dislike: 0,
    reply_list: [],
  });

  // commentList State : 전체 댓글 리스트
  const [tempCommentList, setTempCommentList] = useState([]);
  const [posts, setPosts] = useState([]);

  // comment 비구조 할당
  const { comment_id, content, timestamp, createdBy, like, dislike } = comment;

  // ---------- !!! TODO ----------------------------------------
  // useMemo를 활용해서 불필요한 렌더링을 없애도록 하자
  const commentValue = useMemo(() => {
    return;
  }, [tempCommentList]);
  // ------------------------------------------------------------

  useEffect(() => {
    const storedCommentList =
      JSON.parse(localStorage.getItem('commentList')) || [];
    if (storedCommentList) {
      setTempCommentList(storedCommentList);
      console.log('2. storedCommentList');
    }
  }, []);

  // 서버 TEST 시 활용 로직
  // useEffect(() => {
  //   fetch("/api/posts") // Django 서버의 '/api/posts' URL로 GET 요청을 보냄
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error("Error:", error));
  //   console.log(posts);
  // }, []);
  // console.log(posts, "DB 결과");

  useEffect(() => {
    localStorage.setItem('commentList', JSON.stringify(tempCommentList));
    JSON.parse(localStorage.getItem('commentList'));
    console.log('3. localStorage수정 후 getItem');
  }, [tempCommentList]);

  // textArea에서 키보드 입력 시, comment state의 content 정보를 변경함
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const updateComment = { ...comment, [name]: value };
    setComment({ ...comment, [name]: value });
    console.log('4. handleChange 함수 실행');
  };

  // Submit 클릭 시, 댓글이 하나 추가된다.
  const handleSubmit = () => {
    const idCreate = uuidv4();
    setComment({ ...comment, comment_id: idCreate });
    console.log('handleSubmit event 발생', comment);
    // e.preventDefault();
    setTempCommentList([...tempCommentList, comment]);
    // event data를 List에 추가하는 함수 필요
    console.log(tempCommentList);
    console.log(JSON.parse(localStorage.getItem('commentList')));

    alert('댓글이 등록되었습니다.');
    setComment({ ...comment, content: '' });
    console.log('Submit 후 setComment 후 리렌더링');

    // // Server POST 요청 TEST
    // fetch('/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(commentList),
    // }) // Django 서버의 '/api/posts' URL로 GET 요청을 보냄
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data))
    //   .catch((error) => console.error('Error:', error));
    // console.log(posts);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(e, 'handleKeyPress');
      handleSubmit(e);
    }
  };

  return (
    <>
      <form className="comment_fo" onSubmit={handleSubmit}>
        <div className="txtara">
          <textarea
            name="content"
            value={content}
            placeholder="댓글을 입력해주세요"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          ></textarea>
        </div>
        <div className="fnc">
          <button type="submit" className="btn">
            등록
          </button>
          <button type="button" className="btn">
            취소
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
