import React, { useState } from "react";
import BoardCard from "./BoardCard";
import { useParams } from "react-router-dom";
// import boardList from "../../../mockdata.json";
import Reply from "./reply/Reply";
import Navbar from "../../navigation/Navbar";
import Footer from "../../footer/Footer";
import "./BoardDetail.css";

function BoardDetail() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(false);

  const [boardList, setBoardList] = useState(
    JSON.parse(localStorage.getItem("boardList")) || []
  );
  
  const filtered_boardList = boardList.filter(
    (content) => content.idx === Number(idx)
  )[0];
  return (
    <>
      <Navbar />
      <div className='wrapped'>
        <div className='contents'>
          <BoardCard
            idx={filtered_boardList.idx}
            title={filtered_boardList.title}
            contents={filtered_boardList.contents}
            created_by={filtered_boardList.created_by}
            timestamp={filtered_boardList.timestamp}
          />
          <Reply />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BoardDetail;
