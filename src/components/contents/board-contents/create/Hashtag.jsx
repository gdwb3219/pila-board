import React, { useState } from 'react';
import './CreateStyle.css';

function Hashtag() {
  const [inputValue, setInputValue] = useState('');
  const [hashtagList, setHashtagList] = useState([]);

  const onChangeFnc = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        setHashtagList([...hashtagList, inputValue.trim()]);
        setInputValue('');
      }
    }
  };

  const handleDelete = (index) => {
    const updateList = [...hashtagList];
    updateList.splice(index, 1);
    setHashtagList(updateList);
  };
  return (
    <>
      <div className="hashtag-container">
        <ul className="hashtag-list">
          {hashtagList.map((tag, index) => (
            <li className="hash" key={index}>
              {tag}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                ' x '
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          className="ta-hashtag"
          placeholder="#해시태그를 등록해보세요. (최대 10개)"
          onChange={onChangeFnc}
          onKeyDown={handleInputKeyPress}
        />
      </div>
    </>
  );
}

export default Hashtag;
