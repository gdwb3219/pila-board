import React, { createContext, useContext, useState } from "react";

const hashtagContext = createContext();

export function HashtagContextProvider({ children }) {
  const [hashtagContextList, setHashtagContextList] = useState([]);
  return (
    <>
      <hashtagContext.Provider
        value={{ hashtagContextList, setHashtagContextList }}
      >
        {children}
      </hashtagContext.Provider>
    </>
  );
}

export function useHashtagContext() {
  return useContext(hashtagContext);
}
