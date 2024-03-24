import React, { useEffect, useState } from "react";
import "./BoardCard.css";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { CgHashtag } from "react-icons/cg";
import { useParams } from "react-router-dom";

function ServerBoardCard({ commentCount }) {
  const { idx } = useParams();
  const [instance, setInstance] = useState({});
  const [hashtagList, setHashtagList] = useState([]);
  console.log(commentCount, "HASHTAG");
  useEffect(() => {

    // fetch(`http://localhost:8000/api/boardlist/${idx}/`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res, "RESRES");
    //     setInstance(res);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching post detail:", error);
    //   });

    // new method
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/boardlist/${idx}/`);
        const jsonData = await response.json();
        console.log(jsonData.hashtag,'jsonData.hashtag')
        
        // 데이터 변환 로직
        if (jsonData && jsonData.hashtag) {
          const updatedData = {
            ...jsonData,
            hashtag: JSON.parse(jsonData.hashtag)
          };
          setInstance(updatedData); // 상태 업데이트
          setHashtagList(updatedData.hashtag)
        } else {
          setInstance(jsonData); // 변환 없이 데이터를 상태로 설정
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, []);

  const { title, contents, createdBy, hashtag, timestamp } = instance;

  return (
    <>
      <div className='BoardCard-component-container'>
        <p className='boardcard-title'>{title}</p>
        <div className='sub-title-container'>
          <p className='boardcard-timestamp'>{timestamp}</p>
          <p className='boardcard-created'>작성자 : {createdBy}</p>
          <p className='reply-count'>💬{commentCount}</p>
        </div>
        <hr />
        <p className="boardcard-content">{contents}</p>
        <div className='viewer-container'>
          <Viewer initialValue={contents} />
        </div>
        <div className='Hashtag-container'>
          <ul className='hashtag-list viewer'>
            {hashtagList.map((tag, index) => (
              <li className='hash' key={index}>
                <div>
                  <CgHashtag size='20px' className='dnanfwjd' /> {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServerBoardCard;
