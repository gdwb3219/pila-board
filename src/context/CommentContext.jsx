import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export function CommentContextProvider({ children }) {
  const INITIALLIST = JSON.parse(localStorage.getItem('commentList')) || [];
  const [commentContextState, setCommentContextState] = useState(INITIALLIST);

  const [showCommentForm, setShowCommentForm] = useState(true);

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
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
export function useCommentContext() {
  return useContext(CommentContext);
}
