import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function ToastViewer({ contents }) {
  return (
    <>
      <div>
        <Viewer initialValue={contents || ""} />
      </div>
    </>
  );
}

export default ToastViewer;
