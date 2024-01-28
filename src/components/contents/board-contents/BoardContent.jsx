import "./BoardContent.css";
import Board from "./Board";
import { HashtagContextProvider } from "../../../context/HashtagContext";

function BoardContent() {
  return (
    <>
      <HashtagContextProvider>
        <div className='wrapped'>
          <h1>게시판</h1>
          <div className='content-container'>
            <div className='Board-Component-container'>
              <div className='Board-name'>호호요가 대항마 게시판</div>
              <Board />
            </div>
            <div className='another-Component-container'>
              <p>another Content</p>
              <div className='chart-container'>
                <div className='chart'>chart</div>
              </div>
            </div>
          </div>
        </div>
      </HashtagContextProvider>
    </>
  );
}

export default BoardContent;
