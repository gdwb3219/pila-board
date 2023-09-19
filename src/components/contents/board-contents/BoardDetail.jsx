import React from "react";
import BoardCard from "./BoardCard";
import { useParams } from "react-router-dom";
import boardList from "../../../mockdata.json";

function BoardDetail() {
  const { idx } = useParams();

  const filtered_boardList = boardList.filter(
    (content) => content.idx === Number(idx)
  )[0];
  return (
    <>
      <BoardCard
        idx={filtered_boardList.idx}
        title={filtered_boardList.title}
        contents={filtered_boardList.contents}
        created_by={filtered_boardList.created_by}
        timestamp={filtered_boardList.timestamp}
      />
    </>
  );
}

export default BoardDetail;
