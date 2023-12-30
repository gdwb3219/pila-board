import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { useRef } from 'react';
import './ToastEditor.css';

function ToastEditor({ editorRef, onToastChange }) {
  // const editorRef = useRef();
  // console.log(editorRef);
  // const onToastChange = () => {
  //   const data = editorRef.current.getInstance().getMarkdown();
  //   console.log(data, 'editor');
  // };
  return (
    <>
      <div className="editor-wrapper">
        <Editor
          // initialValue="hello react editor world!"
          placeholder="내용을 입력하세요"
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          hideModeSwitch={true}
          plugins={[colorSyntax]}
          language="ko-KR"
          ref={editorRef}
          onChange={onToastChange}
          toolbarItems={[
            [/* "bold", */ 'italic', 'strike'],
            ['hr', 'quote'],
            [
              /* "indent",*/
              /* "outdent"*/
            ],
            [/* "table",*/ 'image', 'link'],
            [
              /* "code",*/
              /* "codeblock"*/
            ],
          ]}
        />
      </div>
    </>
  );
}

export default ToastEditor;
