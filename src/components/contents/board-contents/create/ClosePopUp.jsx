import React from "react";

function ClosePopUp({ close, continueModal }) {
  const handleX = () => {
    continueModal(false);
  };

  const handleCloseModal = () => {
    close(false);
  };
  return (
    <>
      <div className='pop-up container'>
        <p id='closeQ'>값이 있는데도 삭제할껴?</p>
        <div className='button-container close'>
          <button className='select' onClick={handleCloseModal}>
            알바노?
          </button>
          <button className='select' onClick={handleX}>
            계속 작성
          </button>
        </div>
      </div>
    </>
  );
}

export default ClosePopUp;
