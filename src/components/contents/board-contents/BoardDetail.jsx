import React, { useState, useEffect } from "react";
import BoardCard from "./BoardCard";
import { useParams } from "react-router-dom";
import boardList from "../../../mockdata.json";

function BoardDetail() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BoardCard
        idx={boardList[idx - 1].idx}
        title={boardList[idx - 1].title}
        contents={boardList[idx - 1].contents}
        created_by={boardList[idx - 1].created_by}
        timestamp={boardList[idx - 1].timestamp}
      />
    </>
  );
}

export default BoardDetail;
