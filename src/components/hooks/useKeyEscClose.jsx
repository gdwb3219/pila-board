import { useEffect } from 'react';

function useKeyEscClose(closeThing) {
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        closeThing();
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, []);
}

export default useKeyEscClose;
