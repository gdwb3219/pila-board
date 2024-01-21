import React, { useEffect, useState } from "react";
import { CgCloseR, CgHashtag } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./CreateStyle.css";

function Hashtag() {
  const [inputValue, setInputValue] = useState("");
  const [hashtagList, setHashtagList] = useState([]);

  const onChangeFnc = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === " " || e.key === "Enter") {
      if (hashtagList.length > 10) {
        console.log("10개를 넘었습니다.");
      } else {
        if (inputValue.trim() !== "") {
          setHashtagList([...hashtagList, inputValue.trim()]);
          setInputValue("");
        }
      }
    }
  };

  const handleDelete = (index) => {
    const updateList = [...hashtagList];
    updateList.splice(index, 1);
    setHashtagList(updateList);
  };

  useEffect(() => {
    console.log(hashtagList, "HashTag");
  }, [hashtagList]);
  return (
    <>
      <div className='hashtag-container'>
        <ul className='hashtag-list'>
          {hashtagList.map((tag, index) => (
            <li className='hash' key={index}>
              <div>
                <CgHashtag size='20px' className='dnanfwjd' /> {tag}
                <button
                  className='close'
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <IoMdClose size='16px' />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <input
          type='text'
          value={inputValue}
          className='ta-hashtag'
          placeholder='#해시태그를 등록해보세요. (최대 10개)'
          onChange={onChangeFnc}
          onKeyDown={handleInputKeyPress}
        />
      </div>
    </>
  );
}

export default Hashtag;
