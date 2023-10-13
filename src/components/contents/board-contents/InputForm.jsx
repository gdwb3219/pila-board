import React, { useState } from "react";

const INITIAL_VALUES = {
  idx: 1,
  title: "게시판 제목 1",
  contents: "게시글 1 입니다.",
  created_by: "작성자 1",
  timestamp: "2023-09-09 18:07:12",
};

function InputForm() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [values, setValues] = useState(INITIAL_VALUES);
  return (
    <>
      <input
        name='title'
        value={values.title}
        placeholder='제목을 입력하세요'
        onChange={handleChange}
      >
        제목
      </input>
      <input
        name='content'
        value={values.title}
        placeholder='본문 내용을 입력하세요'
        onChange={handleChange}
      >
        글 본문
      </input>
    </>
  );
}

export default InputForm;
