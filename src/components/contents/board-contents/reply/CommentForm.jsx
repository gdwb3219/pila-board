import React, { useState } from 'react';

function CommentForm() {
  const [replyData, setReplyData] = useState([]);

  // 현재 시간 구하는 함수
  const time = () => {
    const curr = new Date();
    console.log('현재시간(Locale) : ' + curr + '<br>'); // 현재시간(Locale) : Tue May 31 2022 09:00:30

    // 2. UTC 시간 계산
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

    // 3. UTC to KST (UTC + 9시간)
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
    const kr_curr = new Date(utc + KR_TIME_DIFF);
    return kr_curr;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setReplyData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // event data를 List에 추가하는 함수 필요
    setReplyData(e.target.value);
    console.log(replyData);
  };

  return (
    <>
      <form className="comment_fo" onSubmit={handleSubmit}>
        <div className="txtara">
          <textarea
            name="content"
            placeholder="댓글을 입력해주세요"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="fnc">
          <input type="submit" className="btn" value="등록" />
          <button className="btn">취소</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
