import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import boardList from "../../../mockdata.json";

const curr = new Date();
console.log("현재시간(Locale) : " + curr + '<br>');   // 현재시간(Locale) : Tue May 31 2022 09:00:30

// 2. UTC 시간 계산
const utc = 
      curr.getTime() + 
      (curr.getTimezoneOffset() * 60 * 1000);
      
// 3. UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
const kr_curr = new Date(utc + (KR_TIME_DIFF));
console.log(boardList[boardList.length -1]["idx"])

const InputForm = () => {
  const navigate = useNavigate();
  
  const [board, setBoard] = useState({
    idx : boardList[boardList.length -1]["idx"] + 1,
    title: '',
    createdBy: '',
    contents: '',
    timestamp: kr_curr
  });

  const { idx, title, createdBy, contents, timestamp } = board; //비구조화 할당
  
  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };
  
  const saveBoard =  () => {  
    // setBoard({
    //   ...board,
    //   ["idx"]: boardList[boardList.length -1]["idx"] + 1,
    //   ["timestamp"] : kr_curr
    // })
    boardList.push(board)
    alert('등록되었습니다.');
    navigate('/');
    console.log(board.idx)
    console.log(boardList)
    };

  const backToList = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input
          type="text"
          name="createdBy"
          value={createdBy}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={saveBoard}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default InputForm;
