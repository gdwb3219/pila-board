import "./App.css";
import Board from "./components/contents/board-contents/Board";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <div>Hello, Pila World!</div>
      <Navbar />
      <Board />
      <Footer />
    </>
  );
}

export default App;
