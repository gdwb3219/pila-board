import React from "react";
import "./BoardCard.css";
import { Editor } from "@toast-ui/editor";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function BoardCard({ title, contents, createdBy, timestamp, commentCount }) {
  return (
    <>
      <div className='BoardCard-component-container'>
        <p className='boardcard-title'>{title}</p>
        <div className='sub-title-container'>
          <p className='boardcard-timestamp'>{timestamp}</p>
          <p className='boardcard-created'>작성자 : {createdBy}</p>
          <p className='reply-count'>💬{commentCount}</p>
        </div>
        <hr />
        {/* <p className="boardcard-content">{contents}</p> */}
        <div className='viewer-container'>
          <Viewer initialValue={contents} />
        </div>
      </div>
    </>
  );
}

export default BoardCard;
