import React, { createContext, useContext, useState } from "react";

const CommentContext = createContext();

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
  return useContext(CommentContext);
}
