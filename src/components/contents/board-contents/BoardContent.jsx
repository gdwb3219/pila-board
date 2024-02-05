import './BoardContent.css';
import Board from './Board';
import { HashtagContextProvider } from '../../../context/HashtagContext';

function BoardContent() {
  return (
    <>
      <HashtagContextProvider>
        <div className="wrapped">
          <h1>게시판</h1>
          <div className="content-container">
            <div className="Component-container Board">
              <div className="Board-name">호호요가 대항마 게시판</div>
              <Board />
            </div>
            <div className="Component-container Chart">
              <div className="Board-name">another Content</div>
              <div className="article-container Chart"></div>
            </div>
          </div>
        </div>
      </HashtagContextProvider>
    </>
  );
}

export default BoardContent;
