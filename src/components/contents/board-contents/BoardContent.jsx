import "./BoardContent.css";
import Board from "./Board";

function BoardContent() {
  return (
    <>
      <h1>게시판</h1>
      <div className='Board-container'>
        This is Board Component
        <Board />
      </div>
    </>
  );
}

export default BoardContent;
