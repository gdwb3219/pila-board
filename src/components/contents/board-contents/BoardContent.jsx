import "./BoardContent.css";
import Board from "./Board";

function BoardContent() {
  return (
    <>
      <div className='wrapped'>
        <h1>게시판</h1>
        <div className='Board-container'>
          This is Board Component
          <Board />
        </div>
      </div>
    </>
  );
}

export default BoardContent;
