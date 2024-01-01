import React from 'react';
import './CreateStyle.css';

function Hashtag() {
  // const
  const onChangeFnc = () => {
    return;
  };
  return (
    <>
      <div className="hashtag-container">
        <input
          className="ta-hashtag"
          placeholder="#해시태그를 등록해보세요. (최대 10개)"
          onChange={onChangeFnc}
        />
      </div>
    </>
  );
}

export default Hashtag;
