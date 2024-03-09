import "./App.css";
import Board from "./components/contents/board-contents/Board";
import BoardContent from "./components/contents/board-contents/BoardContent";

function App() {
  return (
    <>
      <BoardContent prep={<Board />} />
    </>
  );
}

export default App;
