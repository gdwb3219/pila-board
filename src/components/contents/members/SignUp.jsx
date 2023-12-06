import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 현재 시간 구하는 함수
const time = () => {
  const curr = new Date();
  console.log("현재시간(Locale) : " + curr + "<br>"); // 현재시간(Locale) : Tue May 31 2022 09:00:30

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  return kr_curr;
};


const SignUp = () => {
  const navigate = useNavigate();
  // 처음 LocalStorage에 있는 boradList로 Parsing 하여 객체 리스트 불러오기
  useEffect(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    if (storedUserList) {
      setUserList(storedUserList);
    }
  }, []);
  // 초기값 boardList 불러오기 (없으면 빈 리스트)
  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  // 초기값 board State 설정
  const [user, setUser] = useState({
    idx: userList.length > 0 ? userList[userList.length - 1]["idx"] + 1 : 0, // boardList의 마지막 항목의 인덱스 + 1
    id: "",
    pw: "",
    timestamp: time(),
  });

  // boardList가 변할 때마다 새로운 boardList를 LocalStorage에 저장 (update 기능)
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const { idx, id, pw, timestamp } = user; //비구조화 할당

  // input으로 받은 데이터 board state 업데이트
  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setUser({
      ...user,
      [name]: value, // 해당 항목만 업데이트
    });
  };

  const saveUser = async () => {
    // setBoard({
    //   ...board,
    //   ["idx"]: boardList[boardList.length -1]["idx"] + 1,
    //   ["timestamp"] : kr_curr
    // })
    await setUserList([...userList, user]);
    alert("등록되었습니다.");
    console.log(userList);
    navigate("/");
  };

  const checkUser = () => {
    
  }

  const backToList = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <span>ID</span>
        <input type='text' name='id' value={id} onChange={onChange} />
        <button onClick={checkUser}>ID 확인</button>
      </div>
      <br />
      <div>
        <span>Password</span>
        <input
          type='text'
          name='pw'
          value={pw}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <button onClick={saveUser}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default SignUp;
