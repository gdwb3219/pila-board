import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
import useKeyEscClose from '../../../hooks/useKeyEscClose';
import ToastEditor from './editor/ToastEditor';
import Hashtag from './Hashtag';
import './CreateStyle.css';
// import ToastEditor from './editor/ToastEditor';

// 현재 시간 구하는 함수
const time = () => {
  const curr = new Date();
  // console.log('현재시간(Locale) : ' + curr + '<br>'); // 현재시간(Locale) : Tue May 31 2022 09:00:30

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  return kr_curr;
};

const InputForm = ({ isModal, setIsModal }) => {
  const inputRef = useRef();
  const editorRef = useRef();
  console.log('InputForm 렌더링');
  let temp_boardList = JSON.parse(localStorage.getItem('boardList')) || [];

  // const navigate = useNavigate();
  // 처음 LocalStorage에 있는 boradList로 Parsing 하여 객체 리스트 불러오기
  useEffect(() => {
    // const storedBoardList = JSON.parse(localStorage.getItem('boardList'));
    // if (storedBoardList) {
    //   setBoardList(storedBoardList);
    // }
    // console.log('첫 번째 useEffect');
  }, []);

  // 초기값 boardList 불러오기 (없으면 빈 리스트)
  // const [boardList, setBoardList] = useState(
  //   JSON.parse(localStorage.getItem('boardList')) || []
  // );

  console.log(temp_boardList, 'BoardList');

  // 초기값 board State 설정
  const [board, setBoard] = useState({
    idx: '', //boardList.length > 0 ? boardList[boardList.length - 1]['idx'] + 1 : 0, // boardList의 마지막 항목의 인덱스 + 1
    title: '',
    createdBy: '',
    contents: '',
    timestamp: '',
  });

  // useRef 비교군
  // const boardRef = useRef({
  //   idx: '', //boardList.length > 0 ? boardList[boardList.length - 1]['idx'] + 1 : 0, // boardList의 마지막 항목의 인덱스 + 1
  //   title: '',
  //   createdBy: '',
  //   contents: '',
  //   timestamp: '',
  // });

  // boardList가 변할 때마다 새로운 boardList를 LocalStorage에 저장 (update 기능)
  useEffect(() => {
    // localStorage.setItem('boardList', JSON.stringify(boardList));
    // 자동으로 커서 활성화
    // console.log(inputRef);
    inputRef.current.focus();
    // console.log('두 번째 useEffect');
  }, []);

  const { idx, title, createdBy, contents, timestamp } = board; //비구조화 할당
  // const { idx, title, createdBy, contents, timestamp } = boardRef.current;

  // input으로 받은 데이터 board state 업데이트
  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value, // 해당 항목만 업데이트
    });
    // console.log(board, 'board');

    // boardRef.current = {
    //   ...boardRef.current,
    //   [name]: value,
    // };
    // console.log(boardRef.current.getInstance(), 'boardRef');
  };

  // Toast ui Editor change 함수
  const onToastChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    const data2 = editorRef.current.getInstance().getHTML();
    console.log(data, 'editor');
    console.log(data2, 'HTML');
    setBoard({
      ...board,
      contents: data,
    });

    // boardRef.current = {
    //   ...boardRef.current,
    //   contents: data,
    // };
    // console.log(boardRef.current, 'boardRef Content');
    // editorRef.current.getInstance().removeHook('addImageBlobHook');
  };

  const saveBoard = async () => {
    const createUUID = uuidv4();
    // setBoard({
    //   ...board,
    //   ["idx"]: boardList[boardList.length -1]["idx"] + 1,
    //   ["timestamp"] : kr_curr
    // })

    // await setBoardList([...boardList, board]);

    const submitBoardList = {
      ...board,
      // ...boardRef.current,
      // idx: createUUID,
      idx:
        temp_boardList.length > 0
          ? temp_boardList[temp_boardList.length - 1]['idx'] + 1
          : 0, // boardList의 마지막 항목의 인덱스 + 1
      timestamp: time(),
    };

    // let temp_boardList = JSON.parse(localStorage.getItem('boardList')) || [];
    temp_boardList.push(submitBoardList);
    console.log(temp_boardList, 'Update');
    // setBoardList(temp_boardList);

    localStorage.setItem('boardList', JSON.stringify(temp_boardList));

    // setState로 BoardList가 바뀌는 것을 예약함. setBoardList로 바로 state가 바뀌지 않음.
    alert('등록되었습니다.');
    setIsModal(false);
  };

  // Modal Close를 위한 close함수 설정
  const cloasModal = () => {
    setIsModal(false);
  };

  // Modal Close 하는 Custom Hook
  useKeyEscClose(cloasModal);

  const createCancel = () => {
    // navigate('/');
    setIsModal(false);
    console.log(isModal);
  };

  return (
    <>
      <div id="form-background"></div>
      <div id="form-container">
        <div className="form-wrapper">
          <div id="create-header">
            <p>글쓰기</p>
            <button className="X-button" onClick={createCancel}></button>
          </div>
          <div className="title">
            <input
              className="title ta"
              placeholder="제목을 입력하세요"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              ref={inputRef}
            />
          </div>
          <br />
          <div className="createdBy">
            <input
              className="createdBy ta"
              placeholder="작성자 ID를 입력하세요"
              type="text"
              name="createdBy"
              value={createdBy}
              onChange={onChange}
            />
          </div>
          <ToastEditor editorRef={editorRef} onToastChange={onToastChange} />
          <Hashtag />
          <br />
          <div id="save-container">
            <button className="button-form" onClick={saveBoard}>
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputForm;
