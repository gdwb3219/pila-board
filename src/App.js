import "./App.css";
import BoardContent from "./components/contents/board-contents/BoardContent";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BoardContent />
      <Footer />
    </>
  );
}

export default App;
