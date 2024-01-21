import { useEffect } from "react";

function useKeyEscClose(closeThing, cond) {
  useEffect(() => {
    console.log("Hook cond");
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        closeThing(cond);
      } else {
        console.log("Hook 거절");
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
}

export default useKeyEscClose;
