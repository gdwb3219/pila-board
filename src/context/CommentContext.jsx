import React, { createContext, useContext, useState } from "react";

const CommentContext = createContext();

export function CommentContextProvider({ children }) {
  const INITIALLIST = JSON.parse(localStorage.getItem("commentList")) || [];
  const [commentContextState, setCommentContextState] = useState(INITIALLIST);

  // const updateCommentList = (newCommentList) => {
  //   setCommentContextState([...commentContextState, newCommentList]);
  // };

  return (
    <CommentContext.Provider
      value={{ commentContextState, setCommentContextState }}
    >
      {children}
    </CommentContext.Provider>
  );
}
export function useCommentContext() {
  return useContext(CommentContext);
}
