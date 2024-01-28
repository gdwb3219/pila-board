import React, { createContext, useContext, useState } from "react";

const CommentContext = createContext(); // 111. 가장 먼저, Context 를 만든다.

export function CommentContextProvider({ children }) {
  const INITIALLIST = JSON.parse(localStorage.getItem("commentList")) || [];
  const [commentContextState, setCommentContextState] = useState(INITIALLIST);

  const [showCommentForm, setShowCommentForm] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [openKey, setOpenKey] = useState();

  // const updateCommentList = (newCommentList) => {
  //   setCommentContextState([...commentContextState, newCommentList]);
  // };

  return (
    // 222. Context.Provider를 활용해 감싸주고, value Prop을 통해 값을 전달.
    <CommentContext.Provider
      value={{
        commentContextState,
        showCommentForm,
        setCommentContextState,
        setShowCommentForm,
        isOpen,
        setIsOpen,
        openKey,
        setOpenKey,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function useCommentContext() {
  // 333. Provider 내부에서 useContext를 활용해서 context value를 불러올 수 있는데, useContext의 변수를 context 그 자체
  return useContext(CommentContext);
}
