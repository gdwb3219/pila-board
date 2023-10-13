import React, { useState, useEffect } from "react";
import BoardCard from "./BoardCard";
import { useParams } from "react-router-dom";
import boardList from "../../../mockdata.json";

function BoardDetail() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(false);

  let result = boardList.filter( board => board.idx  === Number(idx) )[0];
  console.log(result.contents)

  return (
    <>
      <BoardCard
        idx={result.idx}
        title={result.title}
        contents={result.contents}
        created_by={result.created_by}
        timestamp={result.timestamp}
      />
    </>
  );
}

export default BoardDetail;
