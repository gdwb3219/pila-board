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

  // 이미지 컨트롤 함수,
  // 추후 CDN 서버를 구현하게 되면, 아래 완성 필요.
  // TO-DO
  const onUploadImage = async (blob, callback) => {
    console.log(blob);
    // ------------------------------------------------------------------------------
    // -------------추후 CDN 구현 시, fetch Image API 통해서 완성하자. ----------------
    // await fetchUploadImage(blob).then((path) => {
    //   console.log(path);
    //   callback('저장경로', blob.name);
    // });
    // -------------추후 CDN 구현 시, fetch Image API 통해서 완성하자. ----------------
    // ------------------------------------------------------------------------------
    callback('저장경로', blob.name); // CDN 구현 시 지우자.
    return true;
  };
  return (
    <>
      <div className="editor-wrapper">
        <Editor
          // initialValue="hello react editor world!"
          placeholder="내용을 입력하세요"
          previewStyle="vertical"
          height="300px"
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
          // hooks={{ addImageBlobHook: onUploadImage }}  // Image를 file 형태로 저장하기 위해서 필요함. 추후 CDN 활용 시 활성화
        />
      </div>
    </>
  );
}

export default ToastEditor;
