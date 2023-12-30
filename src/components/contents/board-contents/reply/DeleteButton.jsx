import React, { useEffect, useState } from 'react';

function DeleteButton({ k }) {
  const [showDelete, setShowDelete] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setShowDelete(true);
  };

  const handleYesClick = () => {
    let temp_commentList = JSON.parse(localStorage.getItem('commentList'));
    const deleted_commentList = temp_commentList.filter(
      (reply) => reply.comment_id !== k
    );
    localStorage.setItem('commentList', JSON.stringify(deleted_commentList));
    setIsDeleted(true);
    setShowDelete(false);
  };

  const handleNoClick = () => {
    setShowDelete(false);
  };

  useEffect(() => {
    console.log('Delete Button은 useEffect에서 실행 되었다.');
  }, [isDeleted]);

  return (
    <>
      <div className="delete-button">
        <button onClick={handleDelete}>삭제</button>
      </div>

      {showDelete && (
        <div className="popup">
          <p>삭제하시겠습니까?</p>
          <div className="choice">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteButton;
