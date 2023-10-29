const 게시글 = {
  idx: 0, // 게시글 id,
  Num: 1, // 게시 글번호
  title: 'TITLE', // 제목
  user_id: '대원', // 작성자
  content: '블라블라', // 내용
  password: 'PASSWORD', // 비번
  time: time(), // 작성 시각
  like: 123, // 좋아요 수
  dontLike: 123, // 싫어요 수
  commentList: B, // 댓글 리스트
  // 참고 항목
  voteData: data,
  forward: [list],
  hashtag: [list],
};

const 댓글 = {
  댓글id: 'A',
  내용: '하하',
  시간: time(),
  작성자: 'id',
  좋아요: 123,
  싫어요: 123,
  댓글리스트: [대댓글id, 'B',...],  // 대댓글 목록  --- 대댓글과 대댓글이 없는 댓글은 어떻게 구분?
  
};

const 대댓글 = {
  댓글id: 'B',
  내용: '하하222',
  시간: time(),
  작성자: 'id',
  좋아요: 123,
  싫어요: 123,
  댓글리스트: [빈칸],
}

