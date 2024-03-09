import "./BoardContent.css";
import Board from "./Board";
import { HashtagContextProvider } from "../../../context/HashtagContext";
import axios from "axios";
import ServerList from "./server_list/ServerList";

function BoardContent({ prep }) {
  const handleClick1 = async () => {
    // fetch("http://localhost:8000/boardlist/1", {
    //   // method: "GET",
    //   // headers: {
    //   //   //데이터 타입 지정`
    //   //   "Content-Type": "application/json; charset=utf-8",
    //   // },
    //   // body: JSON.stringify(submitBoardList),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.error("Error submitting form", error);
    //   });

    await axios
      .get("http://localhost:8000/api/boardlist/")
      // .then((res) => res)
      .then((res) => console.log(res));
    // .then((data) => console.log(data));
  };

  const handleClick2 = async () => {
    await axios
      .get("http://localhost:8000/api/boardlist/6/")
      .then((res) => console.log(res));
    // .then((data) => console.log(data));
    console.log("실행 완료");
  };
  return (
    <>
      <HashtagContextProvider>
        <div className='wrapped'>
          <h1>게시판</h1>
          <button onClick={handleClick1}>버튼1</button>
          <button onClick={handleClick2}>버튼2</button>
          <div className='content-container'>
            <div className='Component-container Board'>
              <div className='Board-name'>호호요가 대항마 게시판</div>
              {prep}
            </div>
            <div className='Component-container Chart'>
              <div className='Board-name'>another Content</div>
              <div className='article-container Chart'>
                <ServerList />
                List
              </div>
            </div>
          </div>
        </div>
      </HashtagContextProvider>
    </>
  );
}

export default BoardContent;
