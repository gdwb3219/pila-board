import "./Reply.css";

function Reply() {
  return (
    <>
      <div className='add-comment-container'>
        <div className='comment-status'>댓글 수</div>
        <div className='comment-form'>
          <input placeholder='입력란'></input>
          <button type='submit'>등록</button>
        </div>
      </div>
      <div className='comment-container'>
        <div className='commented'>댓글1</div>
        <div className='com-time'>댓글시간</div>
        <div className='good'>좋아요</div>
        <div className='add-comcomment'>대댓글</div>
      </div>
    </>
  );
}

export default Reply;
