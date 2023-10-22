import React, { useState } from "react";

function CommentForm() {
  const [replyData, setReplyData] = useState([]);

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
      <form className='comment_fo' onSubmit={handleSubmit}>
        <div className='txtara'>
          <textarea
            name='content'
            placeholder='댓글을 입력해주세요'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='fnc'>
          <input type='submit' className='btn' value='등록' />
          <button className='btn'>취소</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
